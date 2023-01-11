import { Member, Criterias } from '../../types/members';
declare const getSearch: (criterias: Criterias) => Promise<Member[]>;
export default getSearch;
