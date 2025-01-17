export const Menus = [
  {
    'name': 'Entity',
    'link': '/admin/hotel-table',
    'icon': 'dashboard',
    'chip': false,
    'open': true,
  },
  {
    'name': 'Branch',
    'link': '/admin/branch-table',
    'icon': 'dashboard',
    'chip': false,
    'open': true,
  },
  {
    'name': 'Roles',
    'link': '/admin/role-table',
    'icon': 'dashboard',
    'chip': false,
    'open': true,
  },
  {
    'name': 'Users',
    'link': '/admin/user-table',
    'icon': 'dashboard',
    'chip': false,
    'open': true,
  },
  {
    'name': 'Billing',
    'icon': 'widgets',
    'link': false,
    'open': false,
    'chip': {'value': 17, 'color': 'accent'},
    'sub': [
      {
        'name': 'Branch',
        'link': '/admin/branch',
        'icon': 'indeterminate_check_box',
        'chip': false,
        'open': false,
      },
      {
        'name': 'Role',
        'link': '/admin/role',
        'icon': 'list',
        'chip': false,
        'open': false,
      },
      {
        'name': 'User',
        'link': '/admin/user',
        'icon': 'view_week',
        'chip': false,
        'open': false,

      }
    ]
  }
];
