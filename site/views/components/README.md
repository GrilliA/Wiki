# Button Component - Quick Start

## Files Created

1. **`views/styles/components/_button.scss`** - Button styles with BEM naming
2. **`views/styles/components/index.scss`** - Components barrel file  
3. **`views/components/button.pug`** - Pug mixin for easy usage
4. **`views/button-demo.pug`** - Demo page with all variants
5. **`views/components/BUTTON.md`** - Full documentation

## Quick Usage

### In any Pug file:

```pug
include components/button.pug

// Filled button (primary action)
+button({ variant: 'filled', text: 'Submit' })

// Outline button (secondary action)
+button({ variant: 'outline', text: 'Cancel' })

// Transparent button (tertiary action)
+button({ variant: 'transparent', text: 'Learn More' })

// With icon
+button({ variant: 'filled', text: 'Save', icon: '💾' })

// Icon only
+button({ variant: 'transparent', icon: '×', ariaLabel: 'Close' })

// Link styled as button
+button({ variant: 'filled', text: 'Sign Up', href: '/signup' })

// Disabled
+button({ variant: 'filled', text: 'Submit', disabled: true })

// Full width
+button({ variant: 'filled', text: 'Continue', fullWidth: true })

// Different sizes
+button({ variant: 'filled', text: 'Small', size: 'sm' })
+button({ variant: 'filled', text: 'Default' })
+button({ variant: 'filled', text: 'Large', size: 'lg' })
```

## Direct HTML Usage

```html
<!-- Basic filled button -->
<button class="btn btn--filled">
  <span class="btn__text">Click Me</span>
</button>

<!-- Outline with icon and text -->
<button class="btn btn--outline">
  <span class="btn__icon">💾</span>
  <span class="btn__text">Save</span>
</button>

<!-- Icon only -->
<button class="btn btn--transparent btn--icon-only" aria-label="Close">
  <span class="btn__icon">×</span>
</button>
```

## States (Automatic)

All these states are handled automatically via CSS:

- ✅ **Hover** - Darkens, adds shadow
- ✅ **Focus** - Shows focus ring (for keyboard navigation)
- ✅ **Active** - Scales down slightly on click
- ✅ **Disabled** - Grayed out, no interactions

## Customization

The button uses CSS variables from `_variables.scss`:
- Primary colors: `--color-primary-*`
- Spacing: `--spacing-*`
- Border radius: `--radius-*`
- Typography: `--text-*`, `--font-*`

Override these in your component to customize the appearance.

See `BUTTON.md` for complete documentation.
