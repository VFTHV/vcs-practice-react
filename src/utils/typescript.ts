interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
}

// OMIT
type UserProfile = Omit<User, 'password' | 'email'>;
interface UserProfileInterfae extends Omit<User, 'password' | 'email'> {}

// PICK
type UserProfilePick = Pick<User, 'phone' | 'name' | 'email'>;
interface UserProfilePickInterface
  extends Pick<User, 'phone' | 'name' | 'email'> {}

// PARTIAL
type UserPartial = Partial<User> & { name: string };

const userPartial: UserPartial = {
  name: 'John',
};

// REQUIRED
type UserRequired = Omit<Required<User>, 'city'> & { city?: string };

const userRequired: UserRequired = {
  name: 'Jack',
  email: 'sdf',
  password: 'secret',
  age: 20,
  phone: '334',
  address: 'sddf',
};

// RECORD
const dataRecord: Record<string, { name: string }> = {
  user1: { name: 'Victor' },
};

// PARAMETERS
// constructs a tuple type from parameters of a function
function createUser(username: string, password: string) {
  return { username, password, secret: 123 };
}
type CreateUserInput = Parameters<typeof createUser>;
const dataParameters: CreateUserInput = ['tom', '123'];
createUser(...dataParameters);

// RETURNTYPE
// constructs a type of what function returns
type CreateUserResult = ReturnType<typeof createUser>;

// RETURNTYPE WITH PROMISES
async function createPerson(name: string, address: string) {
  return { name, address };
}
type CreatePersonResult = Awaited<ReturnType<typeof createPerson>>;

// UNKNOWN

let value: unknown;

if (typeof value === 'string') {
  console.log(value.length);
}

const strLength: number = (value as string).length;
