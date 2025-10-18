import { TokenScope } from "../types/TokenScope";

export const PAT_SCOPES: TokenScope[] = [
  { id: 'package:all', description: 'All functions in package.' },
  { id: 'package:read', description: 'Download and view packages on the registry.' },
  { id: 'package:publish', description: 'Publish packages to the registry.' },
  { id: 'package:unpublish', description: 'Unpublish packages from the registry.' },
  { id: 'package:deprecate', description: 'Deprecate packages on the registry.' },
];