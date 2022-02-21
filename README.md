# Training and Placement Portal Monorepo

### Folder Structure

## Setup Development Environment

### Requirements
Node (v16.13.2), Yarn

### Clone the Repository
```
git clone https://github.com/abhi3315/quantum.git quantum
```

### Install the Dependencies
```
cd quantum
yarn
```

### Scripts
```
yarn start:boson # Starts the admin portal dev server
```

```
yarn start:fermion # Starts the student portal dev server
```

```
yarn start:momentum # Starts the backend server
```

## Development Workflow

### Default Branch 
`master`

### Branch Naming
- For feature - `feature/GH-<issue-number>` Ex. `feature/GH-4`
- For bug - `feature/GH-<issue-number>` Ex. `feature/GH-4`

### Raising Pull Request
Once you're done with the issue then raise a PR against the `master` branch.

**Title**: GH-<issue-number> <short description>
Ex. GH-3 Add authentication

**Description**: Fill the template.
