# ⚡ CI/CD Pipeline with GitHub Actions + Docker + Minikube

This project demonstrates how to set up a **full CI/CD pipeline** using:
- 🐙 **GitHub Actions** – CI/CD automation
- 🐳 **Docker** – containerized app
- 📦 **Docker Hub** – image registry
- 🎡 **Minikube** – local Kubernetes deployment

The app is a simple **Node.js + Express** service with endpoints:
- `http://localhost:3000/` → returns greeting 🎉
- `http://localhost:3000/health` → health check ✅

---

## 🚀 Features

- 🔹 Automated tests with **Jest + Supertest**
- 🔹 CI/CD pipeline with GitHub Actions
- 🔹 Dockerized application
- 🔹 Deployment on Minikube (Kubernetes)

---

## 🛠️ Run Locally

1. **Clone repo**
   ```sh
   git clone https://github.com/sandyzayn/project-1-CI-CD-Pipeline.git
   cd project-1-CI-CD-Pipeline
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run locally**
   ```sh
   npm start
   ```
   - App runs at: [http://localhost:3000](http://localhost:3000)
   - Health check: [http://localhost:3000/health](http://localhost:3000/health)

4. **Run tests**
   ```sh
   npm test
   ```

---

## 🐳 Docker Build & Run

```sh
# Build image
docker build -t sandyzayn/cicd-demo .

# Run container
docker run -p 3000:3000 sandyzayn/cicd-demo
```

---

## ⚡ GitHub Actions Workflow

- ✅ Runs tests
- 🏗️ Builds Docker image
- 📤 Pushes image to Docker Hub
- 🚀 Deploys on Minikube

You can find the workflow definition in `.github/workflows/`.

---

## 🎡 Minikube Kubernetes Deployment

Ensure Docker image is pushed to Docker Hub before deploying on Minikube.

```sh
# Start Minikube
minikube start

# Apply Kubernetes manifests
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Get the service URL
minikube service cicd-demo-service
```

---

## 📸 Screenshots

### 1️⃣ GitHub Actions Workflow ✅
<img width="1911" height="952" alt="CI/CD Workflow" src="https://github.com/user-attachments/assets/abc19082-2bea-4bda-aa3e-db04cb89c265" />

### 2️⃣ Docker Image Build & Push 🐳
<img width="1908" height="960" alt="Docker Push" src="https://github.com/user-attachments/assets/995f0ad5-9372-4394-bf56-d1b80dfa8712" />

### 3️⃣ Minikube Deployment 🚀
<img width="1915" height="960" alt="Minikube Deploy" src="https://github.com/user-attachments/assets/bbd0b18a-4406-40d4-b6f1-d5174f540d78" />

### 4️⃣ Kubernetes Pods Running 🎡
<img width="1391" height="872" alt="Pods Running" src="https://github.com/user-attachments/assets/dae23563-0d4c-46e5-88c5-0b9bef2aadf4" />

### 5️⃣ Service Exposed on NodePort 🌐
<img width="1900" height="1021" alt="Service Exposed" src="https://github.com/user-attachments/assets/b62873e8-c8b2-46f4-853d-4abd109a2fec" />

### 6️⃣ Accessing App on Port 3000 🎉
<img width="1907" height="889" alt="App Running" src="https://github.com/user-attachments/assets/3611beae-5063-4d3c-a6ff-9cc07f4b9c16" />

### 7️⃣ Health Check Endpoint ✅
<img width="1919" height="906" alt="Health Check" src="https://github.com/user-attachments/assets/5eeac542-f7c3-40ff-b11d-0cf7d7535e4f" />

### 8️⃣ Test Results with Jest 🧪
<img width="1919" height="1018" alt="Tests Passing" src="https://github.com/user-attachments/assets/ed84eccf-98e2-4b71-b288-9a1947ef469a" />

### 9️⃣ Final CI/CD Success 🎯
<img width="1919" height="409" alt="Pipeline Success" src="https://github.com/user-attachments/assets/bfe99d19-1e23-46e3-bfb6-109de4aacedf" />

---

## 📦 Deliverables

- ✅ GitHub repo with workflows
- ✅ Docker image pushed to Docker Hub
- ✅ CI/CD pipeline results
- ✅ Deployed app running locally via Minikube

