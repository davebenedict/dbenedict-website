# Read Aloud Component Usage

## How to Use

The `ReadAloud` component adds text-to-speech functionality that activates on hover.

### Basic Usage

```tsx
import ReadAloud from '@/components/ReadAloud';

<ReadAloud text="This text will be read aloud when you hover over it">
  <p>Hover over me to hear this text!</p>
</ReadAloud>
```

### In Blog Posts

Update your blog post page to wrap sections:

```tsx
// In src/app/personal/blog/[slug]/page.tsx

import ReadAloud from '@/components/ReadAloud';

// Wrap the entire article content
<ReadAloud text={post.excerpt}>
  <div dangerouslySetInnerHTML={{ __html: post.content }} />
</ReadAloud>
```

### Multiple Sections

You can wrap individual sections for granular control:

```tsx
<div>
  <ReadAloud text="Introduction section content here">
    <h2>Introduction</h2>
    <p>This is the intro...</p>
  </ReadAloud>

  <ReadAloud text="Main content section here">
    <h2>Main Content</h2>
    <p>This is the main content...</p>
  </ReadAloud>
</div>
```

### On Your Homepage

```tsx
<ReadAloud text="Welcome to David Benedict's portfolio. I'm a developer, creator, and innovator.">
  <div className="hero-section">
    <h1>CONNECTED TO DAVID BENEDICT</h1>
    <p>[ DEVELOPER • CREATOR • INNOVATOR ]</p>
  </div>
</ReadAloud>
```

### Styling

The component adds a cyan ring when reading. Customize with className:

```tsx
<ReadAloud 
  text="Your text here"
  className="p-4 rounded-lg hover:bg-cyan-500/5 transition-all"
>
  <p>Styled content</p>
</ReadAloud>
```

## Features

✅ **Automatic**: Starts reading on hover, stops when mouse leaves
✅ **Visual feedback**: Shows cyan ring and icon when reading
✅ **Browser-native**: Uses Web Speech API (no external dependencies)
✅ **Customizable**: Adjust rate, pitch, and volume in the component
✅ **Matrix theme**: Cyan accents match your futuristic design

## Configuration

The component is currently set to **retro computer voice mode**:

```tsx
utterance.rate = 0.85;  // Slower, deliberate (old computer speed)
utterance.pitch = 0.7;  // Lower pitch (robotic sound)
utterance.volume = 0.9; // Louder (old speaker effect)
```

### Voice Style Presets

Edit `src/components/ReadAloud.tsx` to change the style:

**Current: Retro Computer** (default)
```tsx
utterance.rate = 0.85;
utterance.pitch = 0.7;
utterance.volume = 0.9;
```

**HAL 9000 Style** (very slow, deep)
```tsx
utterance.rate = 0.6;
utterance.pitch = 0.5;
utterance.volume = 1.0;
```

**Fast Robot** (quick, mechanical)
```tsx
utterance.rate = 1.3;
utterance.pitch = 0.8;
utterance.volume = 0.9;
```

**Normal Human** (natural)
```tsx
utterance.rate = 1.0;
utterance.pitch = 1.0;
utterance.volume = 0.8;
```

## Browser Support

✅ Chrome, Edge, Safari
✅ Firefox (limited voices)
⚠️ Requires HTTPS in production

## Example: Blog Post with Read Aloud

```tsx
import ReadAloud from '@/components/ReadAloud';

export default function BlogPost() {
  return (
    <article>
      <ReadAloud text="Getting Started with Next.js. Next.js has become one of the most popular frameworks.">
        <h1>Getting Started with Next.js</h1>
        <p>Next.js has become one of the most popular frameworks...</p>
      </ReadAloud>
      
      <ReadAloud text="Why Next.js? It offers server-side rendering, file-based routing, and more.">
        <h2>Why Next.js?</h2>
        <p>It offers server-side rendering...</p>
      </ReadAloud>
    </article>
  );
}
```

## Tips

1. **Keep text concise**: Long text takes time to read
2. **Match text to content**: Use the actual text from the section
3. **Test on mobile**: Some mobile browsers have limited support
4. **Accessibility**: This enhances but doesn't replace proper accessibility

## Advanced: Click to Toggle

Want click instead of hover? Modify the component:

```tsx
const [isReading, setIsReading] = useState(false);

const toggleReading = () => {
  if (isReading) {
    window.speechSynthesis.cancel();
    setIsReading(false);
  } else {
    handleMouseEnter(); // Reuse existing logic
  }
};

return (
  <div onClick={toggleReading} className="cursor-pointer">
    {children}
  </div>
);
```

Ready to make your site talk! 🔊
