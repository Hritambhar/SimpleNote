# Simple Note API Documentation
All endpoints start with the base URL: `/api/notes`
### 1. Create Note

- **Method:** POST
- **URL:** `/`
- **Request Body:**
  - Format: JSON
  - Fields:
    - `title` (string, required): Title of the note.
    - `content` (string, required): Content of the note.
### 2. Retrieve All Notes

- **Method:** GET
- **URL:** `/`
- **Request Body:**
  - Format: JSON
 ```json
 {
    "_id": "603f7f13467ae45aef876124",
      "title": "Meeting Notes",
      "content": "Discussion on project timelines.",
      "createdAt": "2023-02-03T12:34:56.789Z",
      "updatedAt": "2023-02-03T12:34:56.789Z"
}

### Get Note by ID
- **Method:** GET
- **URL:** `/:id`
- **Response:**

```json
{
  "_id": "603f7f13467ae45aef876124",
  "title": "Meeting Notes",
  "content": "Discussion on project timelines.",
  "createdAt": "2023-02-03T12:34:56.789Z",
  "updatedAt": "2023-02-03T12:34:56.789Z"
}
### Update ID
- **Method:** PUT
- **URL:** `/:id`
- **Response:**

 Format: JSON
  - Fields:
    - `title` (string, required): Title of the note.
    - `content` (string, required): Content of the note.


### Delete ID
- **Method:** DELETE
- **URL:** `/:id`
Example Request:
DELETE /api/notes/:id

{
  "message": "Note deleted successfully"
}

