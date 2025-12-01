# 🚀 GitHub Pages Deployment Guide

Complete step-by-step guide to deploy your Culture Media Co. website to GitHub Pages.

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ A GitHub account
- ✅ Git installed on your computer
- ✅ Node.js 18+ installed
- ✅ Your project files ready

---

## 🎯 Method 1: GitHub Actions (RECOMMENDED - Automatic)

This is the easiest method. Every time you push code, it automatically deploys!

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** button (top right) → **"New repository"**
3. Name it (e.g., `culture-media-co` or `portfolio`)
4. Choose **Public** or **Private**
5. **DON'T** initialize with README (we already have one)
6. Click **"Create repository"**

### Step 2: Connect Your Local Project to GitHub

Open your terminal/command prompt in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Culture Media Co website"

# Rename branch to main
git branch -M main

# Add GitHub remote (REPLACE with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**IMPORTANT:** Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name!

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**, select **"GitHub Actions"**
5. Done! ✅

### Step 4: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running (orange dot)
3. Wait 2-3 minutes for it to complete (green checkmark)
4. Your site is now live! 🎉

### Step 5: Access Your Website

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
- If your username is `johndoe` and repo is `culture-media-co`
- URL: `https://johndoe.github.io/culture-media-co/`

---

## 🎯 Method 2: Manual Deployment (Using gh-pages package)

If you prefer manual control over deployments:

### Step 1: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### Step 2: Update vite.config.ts

Open `vite.config.ts` and change the base path:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/', // ← Change this to your actual repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
```

**IMPORTANT:** The repo name must match exactly! If your repo is `culture-media-co`, use:
```typescript
base: '/culture-media-co/',
```

### Step 3: Deploy

```bash
# Build and deploy in one command
npm run deploy
```

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 🌐 Method 3: Custom Domain (Optional)

Want to use your own domain like `culturemediaco.com`?

### Step 1: Add CNAME File

Create a file named `CNAME` in the `/public` folder:

```
culturemediaco.com
```

### Step 2: Configure DNS

In your domain registrar (GoDaddy, Namecheap, etc.):

1. Add an **A Record**:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.108.153`
   - Value: `185.199.109.153`
   - Value: `185.199.110.153`
   - Value: `185.199.111.153`

2. Add a **CNAME Record** (for www):
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io`

### Step 3: Enable Custom Domain in GitHub

1. Go to repository **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain
3. Check **"Enforce HTTPS"**
4. Wait 24-48 hours for DNS to propagate

---

## 🔧 Troubleshooting

### Problem: Site shows 404 error

**Solution 1:** Check your `vite.config.ts` base path
- For `username.github.io/repo-name/` → use `base: '/repo-name/'`
- For custom domain → use `base: '/'`

**Solution 2:** Make sure GitHub Pages is enabled
- Settings → Pages → Source = "GitHub Actions" or "gh-pages branch"

### Problem: Images not loading

**Solution:** Check that all image imports use relative paths:
```typescript
import imgSabarmati from "./path/to/image.png"
```

### Problem: GitHub Actions deployment failing

**Solution:** 
1. Check the Actions tab for error messages
2. Make sure `package.json` has all dependencies
3. Run `npm install` and `npm run build` locally to test

### Problem: Changes not showing on live site

**Solution:**
1. Clear browser cache (Ctrl + Shift + R or Cmd + Shift + R)
2. Wait a few minutes for deployment to complete
3. Check Actions tab to ensure deployment succeeded

### Problem: "gh-pages branch not found"

**Solution:**
- If using GitHub Actions method, ignore this (no gh-pages branch needed)
- If using manual method, run `npm run deploy` first

---

## 📊 Deployment Checklist

Before deploying, make sure:

- [ ] All contact information is correct (email, phone, WhatsApp)
- [ ] Portfolio link is working
- [ ] All images are loading properly
- [ ] Site is responsive on mobile
- [ ] All external links work (WhatsApp, email, portfolio)
- [ ] Theme switcher works
- [ ] Guide Me modal functions properly
- [ ] Contact form submits correctly
- [ ] No console errors (check browser DevTools)

---

## 🔄 Updating Your Site

### Using GitHub Actions (Method 1):

```bash
# Make your changes to the code
# Then:

git add .
git commit -m "Description of changes"
git push origin main

# Wait 2-3 minutes - site automatically updates! ✨
```

### Using Manual Deployment (Method 2):

```bash
# Make your changes
# Then:

npm run deploy

# Site updates in 1-2 minutes! ✨
```

---

## 🎨 Important Configuration Notes

### For Repository Deployment (username.github.io/repo-name/)

In `vite.config.ts`:
```typescript
base: '/repo-name/',  // ← Your actual repo name
```

### For Root Domain Deployment (username.github.io/)

1. Name your repository: `username.github.io` (exact match to your username)
2. In `vite.config.ts`:
```typescript
base: '/',  // ← Root domain
```

### For Custom Domain (culturemediaco.com)

In `vite.config.ts`:
```typescript
base: '/',  // ← Custom domain
```

---

## 📞 Need Help?

If you run into issues:

1. **Check GitHub Actions logs:** Repository → Actions tab → Click on failed workflow
2. **Test locally first:** Run `npm run build` and `npm run preview`
3. **Check browser console:** F12 → Console tab for errors
4. **GitHub Pages Status:** https://www.githubstatus.com/

---

## 🎉 Success Indicators

Your deployment is successful when:

✅ GitHub Actions workflow shows green checkmark  
✅ Site loads at your GitHub Pages URL  
✅ All images and styles load correctly  
✅ Interactive features work (theme switcher, modals, forms)  
✅ Mobile responsive design works  
✅ No 404 errors  

---

## 📚 Useful Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React GitHub Pages Guide](https://create-react-app.dev/docs/deployment/#github-pages)

---

**Built with ❤️ by Culture Media Co.**  
**WE MAKE IMPACT VISIBLE** | A Consulting Agency

🌐 Live Site: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`  
📧 Email: culturemediateam@gmail.com  
📱 Phone: +91 9116356899  
💬 WhatsApp: [Chat Now](http://wa.me/919116356899)
