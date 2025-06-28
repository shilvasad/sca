# API Gateway Path Structure
## Teacher Management API
### Teachers Management
<pre>
Base Path: /teachers
GET /teachers — Get all teachers
POST /teachers — Add a new teacher
GET /teachers/:id — Get a teacher by ID
PUT /teachers/:id — Update a teacher by ID
DELETE /teachers/:id — Delete a teacher by ID
###Students Management
Base Path: /students
GET /students — (Currently returns "Student Management API" test message)
(Other CRUD endpoints are planned but not yet implemented)
</pre>
### Authentication and Authorization
<pre>
Base Path: /auth
POST /auth/login — Login teacher
GET /auth/logout — Logout teacher
</pre>

### Teacher Profile Management (Planned/Example)
<pre>
Base Path: /profiles/teacher
GET /profiles/teacher/profile — Get teacher profile (requires authentication/authorization)
PUT /profiles/teacher/profile — Update teacher profile (requires authentication/authorization)
</pre>

# API Gateway Path Structure
## Teacher Management API
### Teachers Management
```
GET /teachers           [GET, POST]
GET /teachers/:id       [GET, PUT, DELETE]
```
### Students Management
```
GET /students           [GET]
```
### Authentication and Authorization
```
POST /auth/login         [POST]
GET /auth/logout        [GET]
```
### Teacher Profile Management (Planned/Example)
```
GET /profiles/teacher/profile [GET, PUT]
```

