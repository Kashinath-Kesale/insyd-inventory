### **Inventory Visibility POC – Insyd Assignment**

#### **Overview**

This project is a simple inventory management system built as part of the Insyd SDE Intern assignment.
The goal is to improve inventory visibility for material businesses and highlight low-stock items so that timely decisions can be made.

---

#### **Problem Addressed**

Many material businesses lack real-time visibility into their inventory. This leads to overstocking, stockouts, and poor planning.
This POC focuses on solving the core problem of inventory visibility and low-stock awareness.

---

#### **Features**

* View current inventory items
* Add new inventory items
* Update quantity and minimum stock threshold
* Highlight low-stock items clearly
* Real-time data persistence using MongoDB

---

#### **Tech Stack**

* Frontend: Next.js (JavaScript)
* Backend: Node.js, Express.js
* Database: MongoDB Atlas
* Deployment:

  * Frontend: Vercel
  * Backend: Render

---

#### **Live Demo**

Visit:
[https://insyd-inventory.vercel.app/](https://insyd-inventory.vercel.app/)

---

#### **Assumptions**

* Single location inventory
* Single user system
* Manual stock updates
* No authentication included

---

#### **Out of Scope**

* User authentication
* Sales or billing
* Inventory forecasting
* Multi-warehouse support

---

#### **How to Run Locally**

**Backend**

```
cd backend
npm install
npm run dev
```

**Frontend**

```
cd frontend
npm install
npm run dev
```
---

