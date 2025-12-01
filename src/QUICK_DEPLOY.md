# ⚡ Quick Deploy to GitHub Pages

**Super fast deployment guide - 5 minutes!**

---

## 🚀 Automatic Deployment (Easiest)

### 1️⃣ Create GitHub Repository
- Go to GitHub.com
- Click **"New repository"**
- Name it (e.g., `culture-media-co`)
- Click **"Create"**

### 2️⃣ Push Your Code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3️⃣ Enable GitHub Pages
- Go to repo **Settings** → **Pages**
- Source: Select **"GitHub Actions"**
- Done! ✅

### 4️⃣ Access Your Site (2-3 min wait)
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 🎯 Update Your Site Later

```bash
# Make changes to code
git add .
git commit -m "Your update message"
git push origin main
# Automatically deploys in 2-3 minutes! ✨
```

---

## ⚠️ Important: Base Path

### If deploying to `username.github.io/repo-name/`:

Open `vite.config.ts` and change:
```typescript
base: '/YOUR_REPO_NAME/',  // Must match your repo name exactly!
```

### If deploying to custom domain or `username.github.io`:
```typescript
base: '/',
```

---

## 🆘 Common Issues

| Problem | Solution |
|---------|----------|
| **404 Error** | Check `base` path in `vite.config.ts` |
| **Images not loading** | Check image imports are relative paths |
| **Styles broken** | Clear browser cache (Ctrl+Shift+R) |
| **Changes not showing** | Wait 2-3 min, check Actions tab |

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Update `vite.config.ts` base path
- [ ] Test locally: `npm run build && npm run preview`
- [ ] All links work (WhatsApp, email, portfolio)
- [ ] Contact info is correct
- [ ] No console errors

---

## 📞 Your Site Info

**Repository URL Pattern:**
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
```

**Live Site URL Pattern:**
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
- Username: `johndoe`
- Repo: `culture-media-co`
- Live: `https://johndoe.github.io/culture-media-co/`

---

## 🎉 That's It!

Your site is now live! Every push to `main` branch automatically deploys.

Need detailed help? Read `DEPLOYMENT_GUIDE.md`

---

**CULTURE MEDIA CO. | WE MAKE IMPACT VISIBLE**  
📧 culturemediateam@gmail.com | 📱 +91 9116356899
