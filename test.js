import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testPortfolio() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  let server;
  let errors = [];

  try {
    // Start the development server
    server = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
      cwd: join(__dirname, '..'),
      stdio: 'pipe',
      env: { ...process.env, HOME: '/workspace' }
    });

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Navigate to the page
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    
    // Wait for loading screen to complete (2.5 seconds)
    await page.waitForTimeout(3000);
    
    // Check for console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    page.on('pageerror', error => {
      errors.push(error.message);
    });

    console.log('Page loaded successfully!');

    // Test key elements exist
    const title = await page.title();
    console.log('Page title:', title);

    // Check for main sections by ID
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    for (const section of sections) {
      const element = await page.$(`#${section}`);
      console.log(`${section} section found:`, !!element);
    }

    // Check for navbar
    const navbar = await page.$('nav');
    console.log('Navbar found:', !!navbar);

    // Check for key content elements
    const h1Elements = await page.$$('h1');
    console.log('H1 elements count:', h1Elements.length);

    // Wait a bit for any delayed errors
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Report errors
    if (errors.length > 0) {
      console.log('\nConsole errors found:');
      errors.forEach(err => console.log('  -', err));
      process.exit(1);
    } else {
      console.log('\n✓ No console errors detected!');
      console.log('✓ Portfolio test passed successfully!');
    }

  } catch (error) {
    console.error('Test failed:', error.message);
    process.exit(1);
  } finally {
    if (server) {
      server.kill();
    }
    await browser.close();
  }
}

testPortfolio();
