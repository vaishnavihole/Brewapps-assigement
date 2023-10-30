# BrewApps Assesment API

This is a simple API for managing a bookstore. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on books.

### Get All Books

- **URL:** `/books`
- **Method:** `GET`
- **Description:** Get a list of all books in the bookstore.
- **Response:**

```json
{
    "success": true,
    "data": [array_of_books
    ],
    "message": "Books fetched successfully"
}
```

### Add a Book

- **URL:** `/book`
- **Method:** `POST`
- **Description:** Add a new book to the bookstore.
- **Request Body:**
  - `title` (string): The title of the book.
  - `summary` (string): A brief summary of the book.
  - `author` (string): The author of the book.
  - `ISBN` (string): The ISBN (International Standard Book Number) of the book.
  - `price` (number): The price of the book.
  - `image` (string): URL of the book cover image.
- **Response:**
  `json
    {
    "success": true,
    "data": [newly_created_book
    ],
    "message": "Book saved successfully"
}
    `

### Get a Book by ID

- **URL:** `/book/:id`
- **Method:** `GET`
- **Description:** Get information about a specific book by its ID.
- **Response:**

```json
{
    "success": true,
    "data": [book_with_matching_id
    ],
    "message": "Book fetched Successfully"
}
```

### Update a Book

- **URL:** `/book/:id`
- **Method:** `PUT`
- **Description:** Update the information of a specific book by its ID.
- **Request Body:** Same as the "Add a Book" endpoint.
- **Response:**

      ```json
      {
      "success": true,
      "data": [updated_book
      ],
      "message": "Book updated Successfully"

  }
  ```

### Delete a Book

- **URL:** `/book/:id`
- **Method:** `DELETE`
- **Description:** Delete a specific book by its ID.
- **Response:**

```json
{
    "success": true,
    "message": "Book deleted successfully"
}
```
