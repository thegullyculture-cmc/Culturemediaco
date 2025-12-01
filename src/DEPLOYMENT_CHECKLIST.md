# ✅ Deployment Checklist

**Use this checklist to ensure a smooth deployment to GitHub Pages.**

Print this or keep it open while deploying!

---

## 📋 Pre-Deployment Setup

### Environment Setup
```
☐ Node.js 18+ installed
  Test: Open terminal, run: node --version
  
☐ Git installed  
  Test: Open terminal, run: git --version
  
☐ GitHub account created
  Sign up: https://github.com
  
☐ Terminal/Command Prompt works
  Windows: cmd or PowerShell
  Mac/Linux: Terminal
```

---

## 📝 Configuration

### Code Configuration
```
☐ Open vite.config.ts
☐ Update base path to match repository name:
  base: '/YOUR_REPO_NAME/',
  
☐ Verify contact information:
  ☐ Email: culturemediateam@gmail.com
  ☐ Phone: +91 9116356899
  ☐ WhatsApp: http://wa.me/919116356899
  
☐ Check portfolio link works:
  https://drive.google.com/file/d/1T8Lp97_4XCe70iucoKaUmS295FIr4C9i/view?usp=sharing
```

### Local Testing
```
☐ Run: npm install
☐ Run: npm run build
☐ Run: npm run preview
☐ Open: http://localhost:4173
☐ Test all pages work
☐ Test mobile view (browser DevTools)
☐ Test theme switcher
☐ Test modals (Guide Me)
☐ Check browser console for errors (F12)
☐ Test contact forms
```

---

## 🌐 GitHub Repository Setup

### Create Repository
```
☐ Go to: https://github.com/new
☐ Repository name: __________________ (write it down!)
☐ Description: Culture Media Co. portfolio website
☐ Visibility: Public OR Private (check one)
☐ DO NOT check "Add a README file"
☐ DO NOT check "Add .gitignore"
☐ DO NOT check "Choose a license"
☐ Click "Create repository"
```

### Save Your URLs
```
Repository URL:
https://github.com/_____________/_______________
               (your username)  (repository name)

Live Site URL (will be):
https://_____________.github.io/_______________/
      (your username)           (repository name)
```

---

## 💻 Git Commands

### Initial Push
```bash
☐ Navigate to project folder in terminal

☐ Run: git init
  Status: _______________

☐ Run: git add .
  Status: _______________

☐ Run: git commit -m "Initial commit"
  Status: _______________

☐ Run: git branch -M main
  Status: _______________

☐ Run: git remote add origin https://github.com/USERNAME/REPO.git
  (Replace USERNAME and REPO with yours!)
  Status: _______________

☐ Run: git push -u origin main
  (May ask for GitHub login)
  Status: _______________
```

### Verify Push Succeeded
```
☐ Go to: https://github.com/YOUR_USERNAME/YOUR_REPO
☐ Files visible on GitHub? Yes / No
☐ Last commit shows "Initial commit"? Yes / No
```

---

## ⚙️ GitHub Pages Configuration

### Enable GitHub Pages
```
☐ Go to repository on GitHub
☐ Click "Settings" tab
☐ Click "Pages" in left sidebar
☐ Under "Source", select: "GitHub Actions"
☐ Page saves automatically
```

### Verify Workflow Permissions
```
☐ Still in Settings, click "Actions" → "General"
☐ Scroll to "Workflow permissions"
☐ Select: "Read and write permissions"
☐ Check: ☑ "Allow GitHub Actions to create and approve pull requests"
☐ Click "Save"
```

---

## 🚀 Deployment

### Monitor Deployment
```
☐ Click "Actions" tab
☐ See "Deploy to GitHub Pages" workflow
☐ Status: Running (orange 🟠) / Success (green ✅) / Failed (red ❌)
☐ If failed, click on it to see error logs
☐ Wait for green checkmark (2-3 minutes)
```

### Deployment Status
```
Time started: __________
Time completed: __________
Total time: __________

Status: ☐ Success ✅  ☐ Failed ❌
```

---

## 🌍 Live Site Verification

### Access Your Site
```
☐ Go to Settings → Pages
☐ See: "Your site is live at..."
☐ Click the URL
☐ Site loads? Yes / No
```

### Test Live Site
```
☐ Homepage loads correctly
☐ All images display
☐ Colors/styles load properly
☐ Theme switcher works
☐ Navigate to Services section
☐ Expand service packages
☐ Navigate to Projects section
☐ Open project modals
☐ Navigate to Contact section
☐ Test Guide Me modal
☐ Click portfolio button
☐ Click WhatsApp link
☐ Click email link
```

### Mobile Testing
```
☐ Open on mobile device OR
☐ Use browser DevTools (F12 → Toggle Device Toolbar)
☐ Test in portrait mode
☐ Test in landscape mode
☐ All content fits screen
☐ Buttons are tappable
☐ Text is readable
☐ Images scale properly
☐ Modals work on mobile
```

### Browser Testing
```
☐ Test in Chrome
☐ Test in Firefox
☐ Test in Safari (if available)
☐ Test in Edge
☐ Check browser console (F12) for errors
```

---

## 🔍 Final Quality Checks

### Content Verification
```
☐ Company name: "CULTURE MEDIA CO."
☐ Tagline: "WE MAKE IMPACT VISIBLE"
☐ Header: "A CONSULTING AGENCY"
☐ Email: culturemediateam@gmail.com
☐ Phone: +91 9116356899
☐ WhatsApp link works
☐ Portfolio link works
☐ All service pricing displays correctly
☐ Project images load
☐ No placeholder text (Lorem ipsum)
☐ No "TODO" comments visible
```

### Technical Checks
```
☐ No 404 errors
☐ HTTPS (🔒) in address bar
☐ No mixed content warnings
☐ Images load quickly
☐ Smooth animations
☐ No console errors
☐ No console warnings (check F12)
```

### Performance Checks
```
☐ Page loads in under 3 seconds
☐ Images optimized
☐ Smooth scrolling
☐ Responsive interactions
```

---

## 📊 Post-Deployment

### Documentation
```
☐ Update README.md with live URL
☐ Save GitHub repository URL
☐ Save live site URL
☐ Bookmark repository
☐ Bookmark live site
```

### Share Your Site
```
☐ Test share on WhatsApp
☐ Test share on Email
☐ Test share on Social Media
☐ Share with team members
☐ Share with clients
```

### Set Up Monitoring
```
☐ Star your repository (for easy access)
☐ Enable GitHub notifications:
  Settings → Notifications → Actions
☐ Bookmark Actions page for deployment status
```

---

## 🔄 Future Updates

### Update Process
```
To update your site in the future:

1. ☐ Make code changes
2. ☐ Test locally: npm run build && npm run preview
3. ☐ Run: git add .
4. ☐ Run: git commit -m "Description of changes"
5. ☐ Run: git push origin main
6. ☐ Wait 2-3 minutes
7. ☐ Check Actions tab for green checkmark
8. ☐ Refresh live site
9. ☐ Verify changes deployed correctly
```

---

## 🆘 Troubleshooting

### If Something Goes Wrong
```
☐ Read error message carefully
☐ Check TROUBLESHOOTING.md file
☐ Check Actions tab for detailed logs
☐ Test build locally: npm run build
☐ Check vite.config.ts base path
☐ Clear browser cache: Ctrl+Shift+R
☐ Try in incognito/private mode
☐ Wait 5 minutes and try again
☐ Check GitHub Status: githubstatus.com
```

### Common Issues Quick Fix
```
☐ 404 Error → Check base path in vite.config.ts
☐ Images not loading → Check import paths
☐ Styles broken → Clear cache, check globals.css
☐ Build failing → Check Actions logs, test locally
☐ Permission error → Check workflow permissions
```

---

## ✅ Deployment Complete!

### Success Criteria
```
All of these should be checked:

☑ Code pushed to GitHub
☑ GitHub Pages enabled
☑ Deployment succeeded (green ✅)
☑ Site accessible at GitHub Pages URL
☑ All content displays correctly
☑ All links work
☑ Mobile responsive
☑ No errors in console
☑ All tests passed
☑ Site shared with stakeholders
```

### Your Live URLs

**Repository:**
```
https://github.com/______________/________________
```

**Live Site:**
```
https://______________.github.io/________________/
```

**Last Deployed:**
```
Date: ________________
Time: ________________
Commit: _______________
```

---

## 📞 Support

### If You Need Help

**Documentation Files:**
- `START_HERE.md` - Getting started
- `QUICK_DEPLOY.md` - Fast deployment
- `DEPLOYMENT_GUIDE.md` - Detailed guide
- `TROUBLESHOOTING.md` - Fix issues
- `GITHUB_SETTINGS.md` - Configure GitHub

**Culture Media Co.:**
- Email: culturemediateam@gmail.com
- Phone: +91 9116356899
- WhatsApp: http://wa.me/919116356899

---

## 🎉 Congratulations!

If all items are checked, your website is successfully deployed!

**Share your achievement:**
```
🎊 My Culture Media Co. portfolio is now live!
🌐 Check it out: [YOUR_URL_HERE]
🚀 Built with React, deployed on GitHub Pages
#WebDevelopment #CultureMediaCo #GitHubPages
```

---

**Deployment Date:** ________________

**Deployed By:** ________________

**Status:** ☐ Success ✅  ☐ In Progress 🟡  ☐ Issues ❌

---

**CULTURE MEDIA CO. | WE MAKE IMPACT VISIBLE**

A Consulting Agency

📧 culturemediateam@gmail.com  
📱 +91 9116356899  
💬 http://wa.me/919116356899
