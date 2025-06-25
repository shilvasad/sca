# Student Management API
## Features
- **Create Student**: Allows the creation of a new student profile.
- **Update Student**: Enables updating the details of an existing student.
- **Delete Student**: Facilitates the removal of a student profile.
- **Get Student**: Retrieves the details of a specific student.
- **List Students**: Provides a list of all students in the system.

## Endpoints
### Create Student
- **Endpoint**: `/api/students/`
- **Method**: `POST`
- **Description**: Creates a new student profile.
- **Request Body**:
  ```json
    {
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "subject": "Mathematics"
    }
    ```
    Response**:
    `json
    {
        "id": 1,
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "subject": "Mathematics"
    }
    ``` 
### Update Student
- **Endpoint**: `/api/students/{id}/`
- **Method**: `PUT`
- **Description**: Updates the details of an existing student.
- **Request Body**:
  ```json
    {
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "subject": "Mathematics"
    }
    ```
    Response**:
    `json
    {
        "id": 1,
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "subject": "Mathematics"
    }
    ``` 
### Update Student
- **Endpoint**: `/api/students/{id}/`
- **Method**: `DELETE`
- **Description**: Deletes a student profile.
- **Response**:
    ```json
    {
        "message": "Student deleted successfully."
    }
    ```
### Get Student
- **Endpoint**: `/api/students/{id}/`
- **Method**: `GET`
- **Description**: Retrieves the details of a specific student.
- **Response**:
    ```json
    {
        "id": 1,
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "subject": "Mathematics"
    }
    ```
### List Students
- **Endpoint**: `/api/students/`
- **Method**: `GET`
- **Description**: Retrieves a list of all students.
- **Response**:
    ```json
    [
        {
            "id": 1,
            "name": "Md Asad Chowdhary",
            "email": "asad@suyena.com",
            "phone": "01601801403",
            "subject": "Mathematics"
        }
    ]
    ```
