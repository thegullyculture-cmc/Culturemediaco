# 🚀 UPLOAD INSTRUCTIONS FOR CULTURE MEDIA CO.

**Repository configured for:**
- GitHub Username: `thegullyculture-cmc`
- Repository Name: `culture-media-co`
- Live URL: `https://thegullyculture-cmc.github.io/culture-media-co/`

---

## ✅ ALL CONFIGURATION COMPLETED!

I've already updated all the necessary files:
- ✅ `vite.config.ts` - Base path set to `/culture-media-co/`
- ✅ `package.json` - Homepage URL configured
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow created
- ✅ `.gitignore` - Git ignore file created
- ✅ `README.md` - Updated with your repo details

**You just need to upload and enable GitHub Pages!**

---

## 📥 STEP 1: Download from Figma Make

1. Look for **Export** or **Download** button (usually top-right)
2. Download the ZIP file
3. Extract to a folder on your computer

---

## 📤 STEP 2: Upload to GitHub

### **Option A: Using Terminal** (Recommended - Faster)

**Open Terminal/Command Prompt in your extracted folder:**

```bash
# Navigate to the folder (replace with your actual path)
cd path/to/culture-media-co

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "🚀 Deploy Culture Media Co portfolio"

# Set main branch
git branch -M main

# Add GitHub remote
git remote add origin https://github.com/thegullyculture-cmc/culture-media-co.git

# Push to GitHub
git push -u origin main
```

**Enter your GitHub username and password/token when prompted.**

---

### **Option B: Using GitHub Web Interface** (Easier if new to Git)

1. **Create new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `culture-media-co`
   - Make it Public
   - **DO NOT** check "Add README" or ".gitignore"
   - Click "Create repository"

2. **Upload files:**
   - On the empty repository page, click **"uploading an existing file"**
   - Drag **ALL** files and folders from your extracted folder
   - Scroll down and click **"Commit changes"**

---

## ⚙️ STEP 3: Enable GitHub Pages

1. **Go to repository Settings:**
   - Navigate to `https://github.com/thegullyculture-cmc/culture-media-co/settings`

2. **Find "Pages" section:**
   - In left sidebar, click **"Pages"** (under "Code and automation")

3. **Configure source:**
   - Under "Build and deployment"
   - Source: Select **"GitHub Actions"** (NOT "Deploy from a branch")
   - Click **Save** (if button appears)

---

## ⏳ STEP 4: Wait for Deployment

1. **Go to Actions tab:**
   - Navigate to `https://github.com/thegullyculture-cmc/culture-media-co/actions`

2. **Watch the deployment:**
   - You'll see a workflow running (yellow dot spinning)
   - Wait 2-3 minutes
   - Green checkmark ✅ = Success!

3. **Visit your live site:**
   - `https://thegullyculture-cmc.github.io/culture-media-co/`

---

## 🎉 DONE!

Your site is now live at:
### **https://thegullyculture-cmc.github.io/culture-media-co/**

---

## 📝 Future Updates

**To update your site later:**

```bash
# Make changes to files
# ... edit files ...

# Commit and push
git add .
git commit -m "Updated portfolio"
git push origin main

# Wait 2-3 minutes - changes are live!
```

---

## ⚠️ Troubleshooting

### **Issue: Site shows "404 - File not found"**
**Solution:** Make sure you selected "GitHub Actions" in Pages settings (not "Deploy from a branch")

### **Issue: Site loads but no styling (plain text)**
**Solution:** This shouldn't happen - I've already configured the base path correctly!

### **Issue: Can't push to GitHub - "Authentication failed"**
**Solution:** 
- GitHub no longer accepts passwords
- Use a Personal Access Token instead
- Create one at: https://github.com/settings/tokens
- Use token as password when pushing

### **Issue: Git command not found**
**Solution:**
- Download Git: https://git-scm.com/downloads
- Or use Option B (Web upload) instead

---

## 📞 Need Help?

If you run into issues:
1. Check the Actions tab for error messages
2. Read the detailed guides in the documentation files
3. Most common issue: Forgetting to enable GitHub Pages

---

**Everything is configured and ready to go!** 🚀

Just download, upload, and enable Pages - your site will be live in minutes!