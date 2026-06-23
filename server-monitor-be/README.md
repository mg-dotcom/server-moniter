# Server Health Monitor & LINE Notify

## Concept
A robust backend system designed to automatically monitor the health and uptime of registered servers. If any server experiences downtime or performance issues, the system instantly triggers an alert to operators via LINE Notify.

## Workflow

* **1. Authentication:** The operator logs into the system securely.
* **2. Server Registration:** The operator adds the target servers they want to monitor by providing a Server Name and URL.
* **3. Automated Monitoring:** A Cron Job automatically sends HTTP requests to check the health of the registered servers every 5 minutes.
* **4. Response Handling:**
    * **Normal (200 OK):** The system records the successful status log into the database.
    * **Abnormal (Timeout/Error):** The system records the error log and **instantly triggers an alert via LINE Notify**.
* **5. History & Reporting:** The operator can retrieve and review historical health check logs via the API.

## Database Schema (ER Diagram)
* **[View ER Diagram on Canva](https://canva.link/7mre66mwmiuw5aj)**
*(You can click the link above to see the complete Entity-Relationship diagram for this project)*

## Tech Stack

* **Framework:** Spring Boot
* **Task Scheduling:** Spring Scheduler (Cron Job)
* **Database:** PostgreSQL
* **Notification:** LINE Notify API
* **Security:** JWT (JSON Web Token for Authentication)
* **DevOps:** Docker + Jenkins (CI/CD)
