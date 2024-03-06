// ---------- ADMIN => CAPACITY ----------
export const ADMIN_GET_ALL_CAPACITIES_SLUG = (page, limit) =>
  `/admin/capacity/?limit=${limit}&page=${page}&capacityStatus=ALL`;
export const ADMIN_GET_REQUEST_CAPACITIES_SLUG = (page, limit) =>
  `/admin/capacity/?limit=${limit}&page=${page}&capacityStatus=UNDER_REVIEW`;
export const ADMIN_GET_SEARCH_QUERY_CAPACITIES_SLUG = (search, status) =>
  `/admin/capacity/search?capacityStatus=${status}&search=${search}`;
export const ADMIN_UPDATE_CAPACITY_STATUS_SLUG = `/admin/capacity/update`;
export const ADMIN_PATCH_MARK_FEATURED_CAPACITIES_SLUG = (id, markFeature) =>
  `/admin/capacity/mark-feature?id=${id}&markFeature=${markFeature}`;
export const DETAILS_SLUG = (id) => `/admin/capacity/${id}`;

// ---------- ADMIN => USERS ----------
export const ADMIN_GET_USERS_SLUG = (page, limit) =>
  `/admin/users/?limit=${limit}&page=${page}`;
export const ADMIN_GET_SEARCH_QUERY_USERS_SLUG = (fullName, email) =>
  `/users/?${fullName ? "fullName=" + fullName : ""}${
    email ? "email=" + email : ""
  }`;
export const ADMIN_DELETE_USER_SLUG = (id) => `/admin/users/${id}`;
export const ADMIN_DETAILS_SLUG = (id) => `http://localhost:3001/users/${id}`;
