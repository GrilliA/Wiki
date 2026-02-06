# Button Component

A flexible and accessible button component with multiple variants, sizes, and states.

## Features

- **3 Variants**: filled, outline, transparent
- **All States**: default, hover, focus, active, disabled
- **Flexible Content**: icons, text, or both
- **3 Sizes**: small, default, large
- **Accessible**: proper ARIA labels and semantic HTML
- **BEM Naming**: follows BEM methodology for class names
- **CSS Variables**: uses design tokens from the global styles

## Usage

### Import the Pug Mixin

```pug
include components/button.pug
```

### Basic Examples

```pug
// Text only button
+button({ variant: 'filled', text: 'Click Me' })

// Button with icon and text
+button({ variant: 'outline', text: 'Save', icon: '💾' })

// Icon only button
+button({ variant: 'transparent', icon: '×' })
```

## API

### Options Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | string | `'filled'` | Button style: `'filled'`, `'outline'`, or `'transparent'` |
| `type` | string | `'button'` | HTML button type: `'button'`, `'submit'`, or `'reset'` |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `size` | string | `''` | Button size: `'sm'`, `''` (default), or `'lg'` |
| `fullWidth` | boolean | `false` | Whether button should take full width |
| `icon` | string | `''` | HTML/text to display as icon |
| `text` | string | `''` | Button text content |
| `href` | string | `''` | If provided, renders as `<a>` instead of `<button>` |
| `ariaLabel` | string | `''` | Accessibility label (defaults to text value) |
| `className` | string | `''` | Additional CSS classes |

## Variants

### Filled
Primary action button with solid background.
```pug
+button({ variant: 'filled', text: 'Submit' })
```

### Outline
Secondary action with border and transparent background.
```pug
+button({ variant: 'outline', text: 'Cancel' })
```

### Transparent
Tertiary/ghost button with no border or background.
```pug
+button({ variant: 'transparent', text: 'Learn More' })
```

## Sizes

```pug
// Small
+button({ size: 'sm', text: 'Small' })

// Default (omit size)
+button({ text: 'Default' })

// Large
+button({ size: 'lg', text: 'Large' })
```

## States

All states are automatically handled via CSS:

- **Hover**: Darkens background, adds shadow
- **Focus**: Shows focus ring (keyboard navigation)
- **Active**: Slightly scales down on click
- **Disabled**: Reduces opacity, shows disabled cursor

```pug
+button({ text: 'Disabled', disabled: true })
```

## Icons

Icons can be used alone or with text:

```pug
// Icon + Text
+button({ text: 'Save', icon: '💾' })

// Icon only (automatically applies icon-only class)
+button({ icon: '×', ariaLabel: 'Close' })
```

**Note**: For icon-only buttons, always provide an `ariaLabel` for accessibility.

## Links as Buttons

Use the `href` property to render a link styled as a button:

```pug
+button({ 
  variant: 'outline', 
  text: 'View Details', 
  href: '/details' 
})
```

## Full Width

```pug
+button({ 
  variant: 'filled', 
  text: 'Continue', 
  fullWidth: true 
})
```

## Direct HTML Usage

If not using Pug, apply classes directly:

```html
<!-- Filled button with icon and text -->
<button class="btn btn--filled">
  <span class="btn__icon">💾</span>
  <span class="btn__text">Save</span>
</button>

<!-- Outline button, small size -->
<button class="btn btn--outline btn--sm">
  <span class="btn__text">Cancel</span>
</button>

<!-- Icon only, transparent -->
<button class="btn btn--transparent btn--icon-only" aria-label="Close">
  <span class="btn__icon">×</span>
</button>
```

## CSS Classes

### Base Class
- `.btn` - Base button styles

### Variant Modifiers
- `.btn--filled` - Solid background (primary)
- `.btn--outline` - Border with transparent background
- `.btn--transparent` - No border or background (ghost)

### Size Modifiers
- `.btn--sm` - Small button
- `.btn--lg` - Large button

### Layout Modifiers
- `.btn--icon-only` - Removes text padding for icon-only buttons
- `.btn--full-width` - Makes button full width

### Elements
- `.btn__icon` - Icon wrapper
- `.btn__text` - Text wrapper

## Customization

Override CSS variables to customize colors:

```scss
.my-custom-button {
  --color-primary-600: #your-color;
  --color-primary-700: #your-hover-color;
}
```

## Demo

View all button variants and states:
- Run the dev server: `npm run dev`
- Navigate to `/button-demo.html` (if demo route is configured)

Or open `views/button-demo.pug` for usage examples.
