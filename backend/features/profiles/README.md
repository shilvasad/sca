# Profile Management API
This API allows for the management of user profiles, including creating, updating, deleting, and retrieving profile information.
## Features
- **Create Profile**: Allows the creation of a new user profile.
- **Update Profile**: Enables updating the details of an existing user profile.
- **Delete Profile**: Facilitates the removal of a user profile.
- **Get Profile**: Retrieves the details of a specific user profile.
- **List Profiles**: Provides a list of all user profiles in the system.

## Endpoints
### Create Profile
- **Endpoint**: `/api/profiles/`
- **Method**: `POST`
- **Description**: Creates a new user profile.
- **Request Body**:
  ```json
    {
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "address": "Dhaka, Bangladesh"
    }
    ```
- **Response**:
    ```json
    {
        "id": 1,
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "address": "Dhaka, Bangladesh"
    }
    ```
### Update Profile
- **Endpoint**: `/api/profiles/{id}/`
- **Method**: `PUT`
- **Description**: Updates the details of an existing user profile.
- **Request Body**:
  ```json
    {
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "address": "Dhaka, Bangladesh"
    }
    ```
- **Response**:
    ```json
    {
        "id": 1,
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "address": "Dhaka, Bangladesh"
    }
    ```
### Delete Profile
- **Endpoint**: `/api/profiles/{id}/`
- **Method**: `DELETE`
- **Description**: Deletes a user profile.
- **Response**:
    ```json
    {
        "message": "Profile deleted successfully."
    }
    ```
### Get Profile
- **Endpoint**: `/api/profiles/{id}/`
- **Method**: `GET`
- **Description**: Retrieves the details of a specific user profile.
- **Response**:
    ```json
    {
        "id": 1,
        "name": "Md Asad Chowdhary",
        "email": "asad@suyena.com",
        "phone": "01601801403",
        "address": "Dhaka, Bangladesh"
    }
    ```
### List Profiles
- **Endpoint**: `/api/profiles/`
- **Method**: `GET`
- **Description**: Retrieves a list of all user profiles.
- **Response**:
    ```json
    [
        {
            "id": 1,
            "name": "Md Asad Chowdhary",
            "email": "asad@suyena.com",
            "phone": "01601801403",
            "address": "Dhaka, Bangladesh"
        }
    ]
    ```
### List Profiles with Pagination
- **Endpoint**: `/api/profiles/?page=1&size=10`
- **Method**: `GET`
- **Description**: Retrieves a list of user profiles with pagination.
- **Response**:
    ```json
    {
        "currentPage": 1,
        "totalPages": 5,
        "profiles": [
            {
                "id": 1,
                "name": "Md Asad Chowdhary",
                "email": "asad@suyena.com",
                "phone": "01601801403",
                "address": "Dhaka, Bangladesh"
            }
        ]
    }
    ```
    