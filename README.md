## Phonebook

Refactor the
[Phonebook code](https://github.com/Vademandr/goit-react-woolf-hw-06-phonebook).
Refactored the code responsible for storing and reading contacts from local
storage, and integrated interaction with the backend for storing contacts.

#### Backend

Set up your personal backend for development using the
[mockapi.io](https://mockapi.io/) UI service. Sign up using your GitHub account.
Establish a `contacts` resource to access the `/contacts` endpoint. Utilize the
resource constructor and provide a description of the contact object, following
the illustration.

![Preview](./assets/api.png)

#### State form

Incorporate a loading indicator and error handling into the Redux state. To
achieve this, modify the state structure.

```js
{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
```

#### Operations

Utilize the
[createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) function
to define asynchronous action creators and handle HTTP requests. Employ
`createSlice` to manage actions and update data within the Redux state.

Announce the following transactions:

- `fetchContacts`: Retrieving an array of contacts (using the GET method) upon
  request. Basic action type is `"contacts/fetchAll"`.
- `addContact`: Adding a contact (using the POST method). Basic action type is
  `"contacts/addContact"`.
- `deleteContact`: Deleting a contact (using the DELETE method). The basic
  action type is `"contacts/deleteContact"`.
