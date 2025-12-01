# ⚙️ GitHub Repository Settings Guide

Step-by-step guide for configuring your repository for GitHub Pages deployment.

---

## 📁 Step 1: Create New Repository

### On GitHub.com:

1. Click the **"+"** icon (top right corner)
2. Select **"New repository"**

### Repository Settings:

```
Repository Name: culture-media-co
                 (or any name you prefer)

Description: Digital portfolio for Culture Media Co. - A Consulting Agency
            (optional but recommended)

Visibility: ○ Public  ● Private
           (Either works, but Public is free)

Initialize: ☐ Add a README file
           ☐ Add .gitignore
           ☐ Choose a license
           (Leave all UNCHECKED - we already have these files)
```

3. Click **"Create repository"**

---

## 🔗 Step 2: Connect Local Project to GitHub

After creating the repository, GitHub shows you instructions. Use these commands:

### Commands to Run:

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` → Your actual GitHub username
- `YOUR_REPO_NAME` → Your repository name

**Example:**
```bash
git remote add origin https://github.com/johndoe/culture-media-co.git
```

---

## 📄 Step 3: Enable GitHub Pages

### Navigate to Settings:

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top menu, near right side)

### Enable Pages:

1. Click **"Pages"** in the left sidebar
2. Under **"Build and deployment"** section:

```
Source: ▼ GitHub Actions
        (Select this from dropdown)
```

3. That's it! No other settings needed.

### What You Should See:

```
✅ GitHub Pages

Source: GitHub Actions

Your site will be published once a successful deployment is made from GitHub Actions.
```

---

## 🔐 Step 4: Verify Permissions (Important!)

### Check Workflow Permissions:

1. Still in **Settings**, click **"Actions"** in left sidebar
2. Click **"General"** under Actions
3. Scroll down to **"Workflow permissions"**
4. Make sure this is selected:

```
● Read and write permissions
○ Read repository contents and packages permissions
```

5. Check this box:
```
☑ Allow GitHub Actions to create and approve pull requests
```

6. Click **"Save"** if you made changes

---

## ⚡ Step 5: Trigger First Deployment

### Option A: Push Code (Recommended)

If you already pushed your code, deployment automatically starts!

### Option B: Manual Trigger

1. Go to **"Actions"** tab
2. You should see workflow running (orange dot 🟠)
3. Wait for green checkmark (✅) - takes 2-3 minutes

### Check Deployment Status:

```
Actions Tab:
├─ Deploy to GitHub Pages
   ├─ build ✅ (completed successfully)
   └─ deploy ✅ (completed successfully)
```

---

## 🌐 Step 6: Access Your Live Site

### Find Your URL:

1. Go to **Settings** → **Pages**
2. You'll see:

```
✅ Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

3. Click the **"Visit site"** button

**OR** manually go to:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 🎨 Optional: Custom Domain Setup

### If You Have a Custom Domain:

1. Still in **Settings** → **Pages**
2. Under **"Custom domain"**:

```
Custom domain: [culturemediaco.com    ]
               [Check]

☑ Enforce HTTPS
```

3. Click **"Save"**

### Then Configure DNS:

At your domain registrar (GoDaddy, Namecheap, etc.):

**Add A Records:**
```
Type: A
Host: @
Points to: 185.199.108.153
TTL: 1 hour

(Repeat for 185.199.109.153, 185.199.110.153, 185.199.111.153)
```

**Add CNAME Record:**
```
Type: CNAME
Host: www
Points to: YOUR_USERNAME.github.io
TTL: 1 hour
```

Wait 24-48 hours for DNS propagation.

---

## 🔄 Step 7: Making Updates

### Every Time You Want to Update:

```bash
# 1. Make your code changes
# 2. Then:

git add .
git commit -m "Updated contact section"
git push origin main

# 3. Wait 2-3 minutes
# 4. Refresh your live site - changes are live! ✨
```

### Monitor Deployment:

1. Go to **Actions** tab
2. See your commit message
3. Wait for green checkmark
4. Changes are live!

---

## 🔍 Step 8: Verify Everything Works

### Checklist:

```
☑ GitHub repository created
☑ Code pushed to main branch
☑ GitHub Actions enabled in Settings → Pages
☑ Workflow permissions set to "Read and write"
☑ Deployment successful (green checkmark in Actions)
☑ Site accessible at GitHub Pages URL
☑ All images loading
☑ Theme switcher working
☑ Contact forms working
☑ Mobile responsive
☑ No console errors (F12 → Console)
```

---

## 📊 Repository Settings Summary

### Essential Settings:

| Setting | Location | Value |
|---------|----------|-------|
| **Source** | Settings → Pages | GitHub Actions |
| **Workflow Permissions** | Settings → Actions → General | Read and write |
| **Branch Protection** | Settings → Branches | (Optional) Protect main |
| **Visibility** | Settings → General | Public or Private |

### Optional Settings:

| Setting | Location | Purpose |
|---------|----------|---------|
| **About** | Main repo page → ⚙️ | Add description & website |
| **Topics** | Main repo page → ⚙️ | Add tags: react, portfolio, vite |
| **Social Preview** | Settings → General | Upload preview image |

---

## 🆘 Troubleshooting Settings

### Issue: "Actions" tab not visible

**Solution:** 
1. Settings → Actions → General
2. "Actions permissions" → Select "Allow all actions"

### Issue: Deployment fails with permission error

**Solution:**
1. Settings → Actions → General  
2. Workflow permissions → Select "Read and write permissions"
3. Re-run the failed workflow

### Issue: 404 on GitHub Pages URL

**Solution:**
1. Check Settings → Pages → Source = "GitHub Actions"
2. Check Actions tab → Deployment completed successfully
3. Update `vite.config.ts` → `base: '/YOUR_REPO_NAME/'`
4. Push again

### Issue: Changes not deploying

**Solution:**
1. Actions tab → Check for failed workflows
2. Click on failed workflow → View logs
3. Fix the error shown in logs
4. Push again

---

## 📧 Repository Information Display

### Update Repository "About" Section:

1. Go to main repository page
2. Click ⚙️ icon next to "About"
3. Fill in:

```
Description: Digital portfolio for Culture Media Co. - WE MAKE IMPACT VISIBLE

Website: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/

Topics: react, typescript, vite, portfolio, consulting-agency, 
        culture-media, tailwind-css, motion, responsive-design

☑ Include in the home page
```

4. Click **"Save changes"**

---

## ✅ Settings Configuration Complete!

Your repository is now properly configured for automatic GitHub Pages deployment!

### Summary:
- ✅ Repository created
- ✅ Code pushed  
- ✅ GitHub Pages enabled
- ✅ Permissions configured
- ✅ Automatic deployment active
- ✅ Live site accessible

### Next Steps:
1. Share your live URL: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
2. Update site by pushing to main branch
3. Monitor deployments in Actions tab

---

**CULTURE MEDIA CO. | WE MAKE IMPACT VISIBLE**

📧 culturemediateam@gmail.com  
📱 +91 9116356899  
💬 [WhatsApp](http://wa.me/919116356899)  
📁 [Portfolio](https://drive.google.com/file/d/1T8Lp97_4XCe70iucoKaUmS295FIr4C9i/view?usp=sharing)
