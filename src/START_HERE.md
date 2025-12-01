# 🎯 START HERE - Deploy Your Website

**Welcome! This guide will get your Culture Media Co. website live in 10 minutes.**

---

## 🚦 Choose Your Path

Pick the option that matches your experience level:

### 🟢 I'm New to GitHub
**→ Follow the [Super Simple Guide](#-super-simple-guide-for-beginners) below**

### 🟡 I've Used GitHub Before  
**→ Go to [Quick Deploy](#-quick-deploy-for-experienced-users)**

### 🔵 I Just Want the Commands
**→ Jump to [Copy-Paste Commands](#-copy-paste-commands)**

---

## 🟢 Super Simple Guide for Beginners

### What You'll Need:
- ✅ A GitHub account (free) - Sign up at [github.com](https://github.com)
- ✅ Your project files (you already have them!)
- ✅ 10 minutes of time

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Follow the instructions
4. Verify your email

### Step 2: Install Git on Your Computer

**Windows:**
1. Download: https://git-scm.com/download/win
2. Run installer
3. Click "Next" through all options
4. Done!

**Mac:**
1. Open Terminal (search "Terminal" in Spotlight)
2. Type: `git --version`
3. If not installed, follow prompts to install
4. Done!

**Linux:**
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git       # Fedora/RedHat
```

### Step 3: Open Terminal/Command Prompt

**Windows:**
1. Press `Windows key + R`
2. Type `cmd` and press Enter

**Mac:**
1. Press `Cmd + Space`
2. Type `Terminal` and press Enter

**Linux:**
1. Press `Ctrl + Alt + T`

### Step 4: Navigate to Your Project

```bash
# See where you are
pwd

# Go to your project folder (example)
cd Documents/culture-media-co

# Or drag folder into terminal and press Enter
```

### Step 5: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** button (top right)
3. Click **"New repository"**
4. Fill in:
   - **Repository name:** `culture-media-co` (or any name you like)
   - **Description:** Culture Media Co. portfolio website
   - **Public** or **Private:** Your choice (both work!)
   - **DON'T check** any boxes at the bottom
5. Click **"Create repository"**

### Step 6: Push Your Code

Copy and paste these commands **one at a time** into your terminal:

```bash
git init
```
*(Press Enter, wait for it to finish)*

```bash
git add .
```
*(Press Enter)*

```bash
git commit -m "Initial commit"
```
*(Press Enter)*

```bash
git branch -M main
```
*(Press Enter)*

Now this one - **IMPORTANT:** Replace `YOUR_USERNAME` with your actual GitHub username and `YOUR_REPO_NAME` with your repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```
*(Press Enter)*

```bash
git push -u origin main
```
*(This might ask for your GitHub username and password - type them in)*

### Step 7: Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left menu)
4. Under "Source", select **"GitHub Actions"**
5. Done! ✅

### Step 8: Wait and Visit!

1. Click **"Actions"** tab (top menu)
2. You'll see a workflow running (orange circle 🟠)
3. Wait 2-3 minutes for green checkmark (✅)
4. Go back to Settings → Pages
5. You'll see: "Your site is live at `https://...`"
6. **Click that link!** 🎉

---

## 🟡 Quick Deploy for Experienced Users

### 1. Update Configuration

**Edit `vite.config.ts`:**
```typescript
base: '/YOUR_REPO_NAME/',  // Match your repo name
```

### 2. Deploy

```bash
git init
git add .
git commit -m "Initial deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Enable GitHub Pages
Settings → Pages → Source: **GitHub Actions**

### 4. Done!
URL: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🔵 Copy-Paste Commands

**Replace these before running:**
- `YOUR_USERNAME` → your GitHub username  
- `YOUR_REPO_NAME` → your repository name

```bash
git init
git add .
git commit -m "🚀 Deploy Culture Media Co website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Then: Settings → Pages → Source: **GitHub Actions**

---

## 🎨 Important: Update Base Path

### Before deploying, edit this file:

**File:** `vite.config.ts`

**Change this line:**
```typescript
base: '/', // ← Default
```

**To this:**
```typescript
base: '/YOUR_REPO_NAME/', // ← Your actual repo name
```

**Example:**
If your repository is named `culture-media-co`, use:
```typescript
base: '/culture-media-co/',
```

---

## 📚 Documentation Files

After deployment, you might need these files:

| Need Help With... | Read This File |
|------------------|---------------|
| **First deployment** | `QUICK_DEPLOY.md` |
| **Detailed steps** | `DEPLOYMENT_GUIDE.md` |
| **GitHub settings** | `GITHUB_SETTINGS.md` |
| **Something broke** | `TROUBLESHOOTING.md` |
| **Overview/summary** | `DEPLOYMENT_SUMMARY.md` |
| **Project info** | `README.md` |

---

## ✅ Before You Deploy Checklist

Make sure you've:

```
☑ Installed Node.js (check: `node --version`)
☑ Installed Git (check: `git --version`)
☑ Created GitHub account
☑ Updated vite.config.ts base path
☑ Updated contact info in code (email, phone, WhatsApp)
☑ Tested locally: `npm run build && npm run preview`
```

---

## 🆘 Common First-Time Issues

### "git: command not found"
**Solution:** Install Git (see Step 2 above)

### "Permission denied"
**Solution:** 
```bash
# Make sure you're logged into GitHub
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### "Repository not found"
**Solution:** Check the URL matches exactly:
```bash
git remote -v  # See current URL
git remote set-url origin https://github.com/CORRECT_USERNAME/CORRECT_REPO.git
```

### "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org

### Site shows 404
**Solution:** Update `vite.config.ts` base path to match repo name exactly!

---

## 🎯 Your Deployment URLs

Save these for later:

**Your Repository:**
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
```

**Your Live Site:**
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Settings Page:**
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/pages
```

**Actions (deployment status):**
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions
```

---

## 🔄 Making Updates Later

After your first deployment, updating is easy:

```bash
# 1. Make your changes to the code
# 2. Then run:

git add .
git commit -m "Description of what you changed"
git push origin main

# 3. Wait 2-3 minutes
# 4. Refresh your site - changes are live! ✨
```

---

## 📞 Culture Media Co. Contact Info

Update these in your code before deploying:

- **Email:** culturemediateam@gmail.com
- **Phone:** +91 9116356899
- **WhatsApp:** http://wa.me/919116356899
- **Portfolio:** https://drive.google.com/file/d/1T8Lp97_4XCe70iucoKaUmS295FIr4C9i/view?usp=sharing

Files to check:
- `/App.tsx`
- `/components/contact-section.tsx`
- `/components/guide-me-modal.tsx`

---

## 🎊 What Happens After You Push?

1. **GitHub receives your code** (instant)
2. **GitHub Actions starts** (within 30 seconds)
3. **Builds your site** (1-2 minutes)
   - Installs dependencies
   - Runs `npm run build`
   - Optimizes files
4. **Deploys to GitHub Pages** (30 seconds)
5. **Your site is live!** (Total: 2-3 minutes)

You can watch this happen in the **Actions** tab!

---

## 🚀 Ready to Deploy?

### Final Checklist:

```
☑ Git installed
☑ GitHub account created
☑ Repository created on GitHub
☑ vite.config.ts updated with correct base path
☑ Terminal/Command Prompt open
☑ You're in your project folder
☑ Contact info verified
```

### Deploy Now:

**Run these commands** (replace YOUR_USERNAME and YOUR_REPO_NAME):

```bash
git init
git add .
git commit -m "🚀 Initial deployment - Culture Media Co"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Then:**
1. Go to Settings → Pages
2. Source: Select **"GitHub Actions"**
3. Wait 2-3 minutes
4. Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🎉 Success!

### Your website is live when you see:

✅ Green checkmark in Actions tab  
✅ Settings → Pages shows "Your site is live at..."  
✅ Site loads at your GitHub Pages URL  
✅ All features work (theme switcher, modals, forms)  
✅ Mobile responsive  

---

## 📖 Next Steps

After successful deployment:

1. **Share your URL** with clients and on social media
2. **Test thoroughly** on different devices
3. **Make updates** by pushing new commits
4. **Monitor** traffic in GitHub Insights
5. **Optional:** Set up custom domain (see `DEPLOYMENT_GUIDE.md`)

---

## 💡 Pro Tips

### Bookmark These URLs:
- Your live site
- Your repository
- Settings → Pages
- Actions tab

### Set Up Notifications:
- GitHub → Settings → Notifications
- Get emails when deployments succeed/fail

### Use Meaningful Commit Messages:
```bash
✅ git commit -m "Add new service pricing"
✅ git commit -m "Fix mobile menu issue"
❌ git commit -m "updates"
❌ git commit -m "changes"
```

---

## 🆘 Need More Help?

### Read These Guides:
1. **Quick Deploy:** `QUICK_DEPLOY.md` - Fast 5-minute guide
2. **Full Guide:** `DEPLOYMENT_GUIDE.md` - Complete instructions
3. **Troubleshooting:** `TROUBLESHOOTING.md` - Fix common issues
4. **Settings:** `GITHUB_SETTINGS.md` - Configure GitHub

### Still Stuck?

- Check GitHub Status: https://www.githubstatus.com/
- GitHub Support: https://support.github.com/
- Test locally first: `npm run build && npm run preview`

---

## 🎯 Remember

**Your website is already configured for deployment!**

All files are ready. Just:
1. Update `vite.config.ts` base path
2. Push to GitHub
3. Enable GitHub Pages
4. Done!

---

**Good luck with your deployment!** 🚀

---

**CULTURE MEDIA CO.**  
**WE MAKE IMPACT VISIBLE** | A Consulting Agency

📧 culturemediateam@gmail.com  
📱 +91 9116356899  
💬 [WhatsApp](http://wa.me/919116356899)
