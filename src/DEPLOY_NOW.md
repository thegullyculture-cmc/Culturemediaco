# 🚀 DEPLOY NOW - Ultra Quick Reference

**Copy, paste, deploy. That's it.**

---

## ⚡ 3-Step Deployment

### STEP 1️⃣: Create GitHub Repository
1. Go to: **https://github.com/new**
2. Name: **culture-media-co** (or your choice)
3. Click: **Create repository**

### STEP 2️⃣: Push Code
**Copy and paste these commands** (one at a time):

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "🚀 Deploy Culture Media Co"
```

```bash
git branch -M main
```

**⚠️ IMPORTANT:** Replace YOUR_USERNAME and YOUR_REPO_NAME below:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

```bash
git push -u origin main
```

### STEP 3️⃣: Enable GitHub Pages
1. Go to: **Settings** → **Pages**
2. Source: Select **"GitHub Actions"**
3. Done! ✅

---

## ⏱️ Your Site Will Be Live In 2-3 Minutes

**Check deployment:**
- Go to **Actions** tab
- Wait for green checkmark ✅

**Access your site:**
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## ⚠️ BEFORE YOU START - Must Do This!

### Update Base Path

**File:** `vite.config.ts`

**Find this:**
```typescript
base: '/',
```

**Change to:**
```typescript
base: '/YOUR_REPO_NAME/',  // Must match your repository name!
```

**Example:**
If your repo is `culture-media-co`:
```typescript
base: '/culture-media-co/',
```

---

## 🔄 Update Your Site Later

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Wait 2-3 minutes → Changes live! ✨

---

## 🆘 Quick Fixes

### 404 Error?
```typescript
// vite.config.ts - Check this matches repo name exactly!
base: '/YOUR_REPO_NAME/',
```

### Images Not Loading?
```bash
# Clear browser cache
Ctrl + Shift + R  (Windows)
Cmd + Shift + R   (Mac)
```

### Build Failed?
```bash
# Test locally
npm install
npm run build
npm run preview
```

### Permission Error?
```
Settings → Actions → General
→ Workflow permissions
→ Select "Read and write"
→ Save
```

---

## 📚 Need More Help?

| Issue | Read This |
|-------|-----------|
| Never deployed before | [START_HERE.md](START_HERE.md) |
| Want detailed guide | [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) |
| Something broke | [TROUBLESHOOTING.md](TROUBLESHOOTING.md) |
| Need checklist | [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) |

---

## ✅ Deployment Success!

Your site is live when you see:

```
✅ Green checkmark in Actions tab
✅ "Your site is live at..." in Settings → Pages
✅ Site loads at your URL
✅ All features work
```

---

## 📞 Your Info

**Repository:**
```
https://github.com/___________/___________
```

**Live Site:**
```
https://___________.github.io/___________/
```

---

## 🎉 That's It!

**Three steps. Few minutes. Your website is live.**

---

**CULTURE MEDIA CO. | WE MAKE IMPACT VISIBLE**

📧 culturemediateam@gmail.com  
📱 +91 9116356899  
💬 [WhatsApp](http://wa.me/919116356899)

---

**First time?** Read [START_HERE.md](START_HERE.md) instead for detailed guidance.
