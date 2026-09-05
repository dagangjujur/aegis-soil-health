const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '.next', 'server', 'app');
const destDir = path.join(__dirname, '.open-next', 'assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function copyHtml(src, dest) {
  const items = fs.readdirSync(src, { withFileTypes: true });
  for (const item of items) {
    const srcPath = path.join(src, item.name);
    if (item.isDirectory()) {
      if (item.name.startsWith('_') || item.name === 'api') continue;
      const subDest = path.join(dest, item.name);
      if (!fs.existsSync(subDest)) fs.mkdirSync(subDest, { recursive: true });
      copyHtml(srcPath, subDest);
    } else if (item.isFile() && item.name.endsWith('.html')) {
      if (item.name.startsWith('_')) continue;
      const destPath = path.join(dest, item.name);
      fs.copyFileSync(srcPath, destPath);
      // create folder/index.html for pretty URLs if not index.html
      if (item.name !== 'index.html') {
        const routeName = item.name.replace(/\.html$/, '');
        const routeFolder = path.join(dest, routeName);
        if (!fs.existsSync(routeFolder)) fs.mkdirSync(routeFolder, { recursive: true });
        fs.copyFileSync(srcPath, path.join(routeFolder, 'index.html'));
      }
      console.log(`Copied ${item.name} to ${path.relative(__dirname, destPath)}`);
    } else if (item.isFile() && item.name === 'sitemap.xml.body') {
      const destFile = path.join(dest, 'sitemap.xml');
      if (fs.existsSync(destFile) && fs.statSync(destFile).isDirectory()) {
        fs.rmSync(destFile, { recursive: true, force: true });
      }
      fs.copyFileSync(srcPath, destFile);
      console.log(`Copied sitemap.xml to ${path.relative(__dirname, destFile)}`);
    }
  }
}

copyHtml(srcDir, destDir);
console.log('Static pages copy complete!');
