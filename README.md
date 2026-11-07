# Color Converter

Convert hexadecimal color values into RGB and luminance.

## Run

npm test and python -m http.server 8000 (visit http://localhost:8000)

## Example input (JSON)

{
  "hex": "#336699"
}

## Expected output fields (JSON)

{
  "rgb": [
    51,
    102,
    153
  ],
  "relativeLuminance": 0.1251
}

## Engineering

Standalone functional implementation, automated CI tests and no third-party runtime dependencies. Educational portfolio example: review for production readiness before deployment.

MIT License - https://github.com/santdevfull
