# GitHub Database Data

This folder contains your PocketBase data converted to JSON format for GitHub-based storage.

## Collections

- **artist.json**: 6 records
- **musician.json**: 31 records
- **partner.json**: 8 records
- **Metaverse.json**: 6 records
- **memories.json**: 2 records
- **publications.json**: 2 records
- **team.json**: 3 records

## Usage

These files are read by the GitHubPocketDB library to provide PocketBase-compatible functionality using GitHub as the backend.

### Example:
```typescript
import { GitHubPocketDB } from 'github-pocket-db';

const db = new GitHubPocketDB({
  owner: 'jb0gie',
  repo: '3PS'
});

await db.init();
const artists = await db.collection('artist').getList();
```

Generated on: 2025-07-02T20:35:12.764Z
