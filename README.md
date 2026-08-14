# Lifeography

This is a lifeography of Wenjun II. Wenjun II is an alter ego of Wenjun. Who is Wenjun?

Visit the project at [wenjunii.github.io/Lifeography](https://wenjunii.github.io/Lifeography/).

## Local development

Lifeography is a static website with no build step. Serve the repository over HTTP so its JavaScript, data, audio, video, image, and 3D-model assets load with browser-compatible paths:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Project structure

- Root HTML files contain the primary pages and experiments.
- `scripts/` contains the JavaScript used by the main pages.
- `stylesheets/` contains shared page styles.
- `images/`, `audios/`, `videos/`, and `models/` contain portfolio media.
- `csv/` and `healthdata/` contain the data used by the visualizations.
- `shape/` contains the shape visualization and its supporting libraries.

## Security

- Version-pinned cdnjs scripts use Subresource Integrity and anonymous CORS metadata.
- UUID generation in the bundled three.js copy uses Web Crypto instead of `Math.random()`.
- Bundled p5.js deep-merge helpers reject inherited and prototype-mutating keys.
- GitHub CodeQL scans JavaScript and TypeScript changes.

These implementation safeguards do not change the site’s visible text, images, styling, or layout.

## GitHub workflow

The `main` branch is protected. Make changes on a separate branch and merge them through a pull request after the checks pass.
