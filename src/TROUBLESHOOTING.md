# 🔧 Deployment Troubleshooting Guide

Common issues and solutions when deploying to GitHub Pages.

---

## 🚨 Issue #1: Site Shows 404 Error

### Symptoms:
- GitHub Pages URL loads but shows "404 - File not found"
- Or shows GitHub's default 404 page

### Solutions:

#### Solution A: Check Base Path
1. Open `vite.config.ts`
2. Make sure base path matches your setup:

**For `username.github.io/repo-name/`:**
```typescript
base: '/repo-name/',  // Must exactly match repository name!
```

**For custom domain or `username.github.io`:**
```typescript
base: '/',
```

3. Rebuild and redeploy:
```bash
git add .
git commit -m "Fix base path"
git push origin main
```

#### Solution B: Check GitHub Pages Source
1. Settings → Pages
2. Source should be: **"GitHub Actions"**
3. If it says "Deploy from a branch", change it to "GitHub Actions"

#### Solution C: Verify Deployment Completed
1. Go to **Actions** tab
2. Look for green checkmark (✅)
3. If red X (❌), click to see error logs

---

## 🚨 Issue #2: Images Not Loading

### Symptoms:
- Site loads but images are broken
- Browser console shows 404 errors for images

### Solutions:

#### Solution A: Check Image Imports
Images should use relative imports:
```typescript
// ✅ Correct
import imgSabarmati from "./assets/sabarmati.png"

// ❌ Wrong
<img src="/assets/sabarmati.png" />
```

#### Solution B: Check Public Folder
1. Images in `/public` folder should be referenced as:
```typescript
<img src="/image.png" />  // Not "./public/image.png"
```

#### Solution C: Clear Browser Cache
- Press `Ctrl + Shift + R` (Windows/Linux)
- Press `Cmd + Shift + R` (Mac)

#### Solution D: Check Base Path Affects Images
If using `base: '/repo-name/'`, images might need adjustment in vite config.

---

## 🚨 Issue #3: GitHub Actions Workflow Failing

### Symptoms:
- Actions tab shows red X (❌)
- Email notification about failed workflow

### Solutions:

#### Solution A: Check Error Logs
1. Actions tab → Click failed workflow
2. Click on "build" job
3. Expand failed step
4. Read error message

Common errors:

**"npm install failed"**
```bash
# Delete package-lock.json and node_modules locally
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "Update dependencies"
git push origin main
```

**"Build failed - TypeScript errors"**
```bash
# Test build locally first
npm run build

# Fix any errors shown
# Then push
```

#### Solution B: Check Workflow Permissions
1. Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Select: **"Read and write permissions"**
4. Check: ☑ "Allow GitHub Actions to create and approve pull requests"
5. Save

#### Solution C: Re-run Workflow
1. Actions tab → Click failed workflow
2. Click "Re-run all jobs" button (top right)

---

## 🚨 Issue #4: CSS/Styles Not Loading

### Symptoms:
- Site loads but looks unstyled
- Plain HTML with no colors or formatting

### Solutions:

#### Solution A: Check Tailwind Import
In `src/main.tsx`, make sure:
```typescript
import '../styles/globals.css'  // This line must exist
```

#### Solution B: Rebuild
```bash
npm run build
git add dist -f  # If deploying dist folder
git commit -m "Rebuild styles"
git push origin main
```

#### Solution C: Check Browser Console
1. Press F12
2. Go to "Console" tab
3. Look for CSS-related errors
4. Check "Network" tab for failed CSS requests

---

## 🚨 Issue #5: JavaScript Not Working

### Symptoms:
- Buttons don't respond
- Modals don't open
- Theme switcher doesn't work
- Console shows errors

### Solutions:

#### Solution A: Check Console Errors
1. Press F12
2. Console tab
3. Look for red errors
4. Fix the reported issues

Common errors:
```
"Failed to load module" → Check import paths
"undefined is not a function" → Check component exports
"Cannot read property" → Check data/props
```

#### Solution B: Test Locally
```bash
npm run build
npm run preview
# Visit http://localhost:4173
# Check if issues exist locally
```

#### Solution C: Check Dependencies
```bash
npm install  # Reinstall dependencies
npm run build
```

---

## 🚨 Issue #6: Site Works Locally But Not on GitHub Pages

### Symptoms:
- `npm run dev` works perfectly
- GitHub Pages version broken

### Solutions:

#### Solution A: Base Path Issue
```typescript
// vite.config.ts
base: '/YOUR_REPO_NAME/',  // Add this!
```

#### Solution B: Absolute Paths
Change absolute paths to relative:
```typescript
// ❌ Wrong
import Component from '/components/Component'

// ✅ Correct
import Component from './components/Component'
```

#### Solution C: Environment Variables
GitHub Pages doesn't support .env files the same way.

Instead of:
```typescript
const API_KEY = import.meta.env.VITE_API_KEY
```

Use:
```typescript
const API_KEY = 'your_key_here'  // Or configure in GitHub Secrets
```

---

## 🚨 Issue #7: Changes Not Showing After Push

### Symptoms:
- Pushed new code
- GitHub Actions succeeded
- Site still shows old version

### Solutions:

#### Solution A: Hard Refresh Browser
- `Ctrl + Shift + R` (Windows/Linux)
- `Cmd + Shift + R` (Mac)
- Or open in Incognito/Private mode

#### Solution B: Wait Longer
- GitHub Pages can take 2-10 minutes to update
- Check Actions tab to confirm deployment completed

#### Solution C: Clear GitHub Pages Cache
1. Push an empty commit:
```bash
git commit --allow-empty -m "Trigger rebuild"
git push origin main
```

#### Solution D: Check Deployment Time
1. Actions tab
2. Look at timestamp of last successful deployment
3. Compare with your push time

---

## 🚨 Issue #8: Custom Domain Not Working

### Symptoms:
- Custom domain shows error
- SSL certificate issues
- Domain not connecting

### Solutions:

#### Solution A: DNS Configuration
Check your domain registrar settings:

**A Records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
www → YOUR_USERNAME.github.io
```

#### Solution B: Wait for DNS Propagation
- Takes 24-48 hours
- Check status: https://dnschecker.org

#### Solution C: CNAME File
Create `/public/CNAME` file with:
```
yourdomain.com
```

#### Solution D: Enforce HTTPS
1. Settings → Pages
2. Wait for DNS check to pass
3. Enable "Enforce HTTPS"

---

## 🚨 Issue #9: Permission Denied Errors

### Symptoms:
```
Error: permission denied
Error: failed to push some refs
```

### Solutions:

#### Solution A: Check Repository Access
- Make sure you have write access to the repository
- Check if you're logged into correct GitHub account

#### Solution B: Authentication
```bash
# If using HTTPS, might need to re-authenticate
git remote set-url origin https://YOUR_USERNAME@github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push origin main
```

#### Solution C: SSH Key
```bash
# Use SSH instead
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

---

## 🚨 Issue #10: Build Succeeds But Deploy Fails

### Symptoms:
- "build" job ✅ passes
- "deploy" job ❌ fails

### Solutions:

#### Solution A: Check Pages Settings
1. Settings → Pages
2. Source: Must be "GitHub Actions"

#### Solution B: Workflow Permissions
1. Settings → Actions → General
2. Workflow permissions: "Read and write"

#### Solution C: Check deploy.yml
Make sure `.github/workflows/deploy.yml` has correct permissions:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

---

## 🔍 Debugging Tools

### Check Build Locally
```bash
# Clean build
rm -rf dist
npm run build
npm run preview
# Visit http://localhost:4173
```

### Check for TypeScript Errors
```bash
npx tsc --noEmit
```

### Check for Missing Dependencies
```bash
npm install
```

### Check Git Status
```bash
git status
git log --oneline -5  # Last 5 commits
```

### Check Remote URL
```bash
git remote -v
# Should show your GitHub repository
```

---

## 📊 Deployment Health Checklist

Run through this checklist:

```
☑ Repository exists on GitHub
☑ Code pushed to main branch
☑ .github/workflows/deploy.yml exists
☑ vite.config.ts has correct base path
☑ Settings → Pages → Source = "GitHub Actions"
☑ Settings → Actions → Permissions = "Read and write"
☑ Actions tab shows successful deployment (green ✅)
☑ Build works locally: npm run build && npm run preview
☑ No TypeScript errors: npx tsc --noEmit
☑ All dependencies installed: npm install
☑ Browser cache cleared
☑ Waited 2-3 minutes after deployment
```

---

## 🆘 Still Having Issues?

### 1. Check GitHub Status
Visit: https://www.githubstatus.com/

If GitHub Pages is down, you'll need to wait.

### 2. Test with Minimal Example

Create a test commit:
```bash
# Make a small visible change
# e.g., change heading text in App.tsx
git add .
git commit -m "Test deployment"
git push origin main
```

Watch Actions tab for success.

### 3. Enable GitHub Actions Debug Logging

1. Repository Settings → Secrets and variables → Actions
2. Add new secret:
   - Name: `ACTIONS_STEP_DEBUG`
   - Value: `true`
3. Re-run workflow
4. Check detailed logs

### 4. Compare Working Example

Check out the official Vite deployment example:
https://github.com/vitejs/vite/tree/main/playground/ssr-react

---

## 📧 Common Error Messages Decoded

| Error | Meaning | Solution |
|-------|---------|----------|
| `ENOENT: no such file or directory` | File path wrong | Check imports use `./ ` not `/` |
| `Module not found` | Missing dependency | Run `npm install` |
| `Failed to fetch` | Network/CORS issue | Check API endpoints |
| `404 on CSS/JS files` | Base path wrong | Fix `vite.config.ts` base |
| `Permission denied` | Auth issue | Check GitHub login |
| `Build failed with exit code 1` | TypeScript/build error | Check error logs, fix code |

---

## ✅ Prevention Tips

### Before Every Deployment:

1. **Test locally first:**
```bash
npm run build && npm run preview
```

2. **Check for errors:**
```bash
npx tsc --noEmit
```

3. **Verify changes:**
   - Test all pages
   - Test mobile view
   - Check browser console (F12)

4. **Meaningful commit messages:**
```bash
git commit -m "Fix: Corrected contact form validation"
# Not just "updates" or "changes"
```

5. **One feature per commit:**
   - Easier to debug
   - Easier to rollback

---

**CULTURE MEDIA CO. | WE MAKE IMPACT VISIBLE**

Need more help? Check these files:
- `DEPLOYMENT_GUIDE.md` - Full deployment guide
- `QUICK_DEPLOY.md` - Fast deployment steps
- `GITHUB_SETTINGS.md` - Settings configuration
- `README.md` - Project overview

📧 culturemediateam@gmail.com | 📱 +91 9116356899
