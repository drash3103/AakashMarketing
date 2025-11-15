import fs from 'fs';
import path from 'path';
import ProductCard from '../../components/ProductCard';

// Helper: recursively collect image files under public/images
function collectImageFiles(dirPath, baseUrl = '/images') {
  const entries = [];
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory()) {
      // Recursively traverse subdirectories with updated base URL
      entries.push(...collectImageFiles(fullPath, `${baseUrl}/${item.name}`));
    } else {
      const ext = path.extname(item.name).toLowerCase();
      // include common image extensions
      if (['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'].includes(ext)) {
        entries.push({
          src: `${baseUrl}/${item.name}`,
          name: path.basename(item.name, ext),
        });
      }
    }
  }

  return entries;
}

export default function Customers() {
  const publicImagesDir = path.join(process.cwd(), 'public', 'images');
  let images = [];
  try {
    images = collectImageFiles(publicImagesDir);
  } catch (err) {
    // If directory missing or read fails, images stays empty
    console.warn('Could not read public/images:', err.message);
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.length === 0 ? (
          <p>No product images found in <code>/public/images</code>.</p>
        ) : (
          images.map((img, idx) => (
            <ProductCard key={idx} name={img.name} image={img.src} />
          ))
        )}
      </div>
    </div>
  );
}