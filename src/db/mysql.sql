-- Create new table jobs with columns id, title, town, description, pay, is_active

CREATE TABLE jobs (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    town VARCHAR(255),
    description TEXT,
    pay DECIMAL(10, 2),
    is_active BOOLEAN
);

-- 5 jobs
INSERT INTO jobs (id, title, town, description, pay, is_active)
VALUES
    (1, 'Software Engineer', 'Karmėlava', 'Develops software applications.', 75000.00, true),
    (2, 'Data Analyst', 'Kauno', 'Analyzes data and generates insights.', 60000.00, true),
    (3, 'Graphic Designer', 'Vilnius', 'Creates visual designs for marketing materials.', 55000.00, true),
    (4, 'Customer Support Specialist', 'Klaipėda', 'Assists customers with inquiries and issues.', 45000.00, true),
    (5, 'Sales Representative', 'Šiauliai', 'Promotes and sells products to clients.', 50000.00, true);