// export { withRouteProtection } from './hocs/withRouteProtection.hoc';
// export { withRoleProtection } from './hocs/withRoleProtection.hoc';

// export { NoPermission } from './components/NoPermission';
// export { ProtectedRoute } from './components/ProtectedRoute';
// export { ProtectedContent } from './components/ProtectedContent';

export { 
    helpService,
} from './services/help.service';

export { 
    useHelp,
} from './hooks/useHelp';


export type { 
  HelpLink,
  HelpLinkCreate
} from './types/help.types';

// export { 
//     ADMIN_ROLES,
//     ACADEMIC_ROLES,
//     TEACHING_ROLES,
//     STUDENT_ROLES,
//     SUPPORT_ROLES,
//     ALL_ROLES,
//     getRoleName
// } from './config/roles.config';

// export { 
//     getCurrentUserRole,
//     hasAllowedRole
// } from './utils/role.validation';