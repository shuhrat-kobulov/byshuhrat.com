# Shuhrat's Blog

## 🚀 Live Demo

Visit the blog: [byshuhrat.com](https://byshuhrat.com)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── [slug]/            # Dynamic blog post pages
│   ├── posts/             # Blog posts listing
│   ├── fonts.ts           # Font configuration
│   ├── global.css         # Global styles
│   └── layout.tsx         # Root layout
├── public/                # Static content
│   ├── [post-slug]/       # Individual blog posts
│   │   └── index.md       # Post content
│   └── bg-img.png         # Background image
├── og/                    # Open Graph image generation
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

-   Node.js 22.8.0 or later
-   npm or yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/shuhrat-kobulov/byshuhrat.com.git
    cd byshuhrat.com
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
    ```
    http://localhost:3000
    ```

### Building for Production

```bash
# Build static site
npm run build

# Preview production build
npm run start
```

## 📝 Writing Content

### Creating a New Post

1. Create a new directory in `public/` with your post slug:

    ```bash
    mkdir public/my-new-post
    ```

2. Add an `index.md` file with frontmatter:

    ```markdown
    ---
    title: 'Your Post Title'
    date: '2025-10-25'
    spoiler: 'Brief description for social sharing'
    ---

    Your content here...
    ```

3. The post will automatically appear in your blog!

## 🤝 Contributing

While this is a personal blog, I welcome:

-   Bug reports and fixes
-   Performance improvements
-   Feature suggestions
-   Translation improvements

Please open an issue first to discuss what you would like to change.
