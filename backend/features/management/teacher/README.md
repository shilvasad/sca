# Teacher Management API
## Features
- **Create Teacher**: Allows the creation of a new teacher profile.
- **Update Teacher**: Enables updating the details of an existing teacher.
- **Delete Teacher**: Facilitates the removal of a teacher profile.
- **Get Teacher**: Retrieves the details of a specific teacher.
- **List Teachers**: Provides a list of all teachers in the system.

## Endpoints
### Create Teacher
- **Endpoint**: `/api/teachers/`
- **Method**: `POST`
- **Description**: Creates a new teacher profile.
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
### Update Teacher
- **Endpoint**: `/api/teachers/{id}/`
- **Method**: `PUT`
- **Description**: Updates the details of an existing teacher.
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
### Update Teacher
- **Endpoint**: `/api/teachers/{id}/`
- **Method**: `DELETE`
- **Description**: Deletes a teacher profile.
- **Response**:
    ```json
    {
        "message": "Teacher deleted successfully."
    }
    ```
### Get Teacher
- **Endpoint**: `/api/teachers/{id}/`
- **Method**: `GET`
- **Description**: Retrieves the details of a specific teacher.
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
### List Teachers
- **Endpoint**: `/api/teachers/`
- **Method**: `GET`
- **Description**: Retrieves a list of all teachers.
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
