type World = 'world';

// type Greeting = 'hello world'
type Greeting = `hello ${World}`;

type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

// type AllLocaleIDs = 'welcome_email_id' | 'email_heading_id' | 'footer_title_id' | 'footer_sendoff_id'
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

type Lang = 'en' | 'ja' | 'pt';

// type LocaleMessageIDs = 'en_welcome_email_id' | 'en_email_heading_id' | 'en_footer_title_id' | 'en_footer_sendoff_id' | 'ja_welcome_email_id' | 'ja_email_heading_id' | 'ja_footer_title_id' | 'ja_footer_sendoff_id' | 'pt_welcome_email_id' | 'pt_email_heading_id' | 'pt_footer_title_id' | 'pt_footer_sendoff_id'
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

/**
 * String Unions in Types
 */
type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    callback: (newValue: any) => void,
  ): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26,
});

person.on('firstNameChanged', () => {
});

/**
 * Inference with Template Literals
 */
type PropEventSource2<Type> = {
  on<Key extends string & keyof Type>
  (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};

declare function makeWatchedObject2<Type>(obj: Type): Type & PropEventSource2<Type>;

const person2 = makeWatchedObject2({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26,
});

person2.on('firstNameChanged', newName => {
  // newName: string
  console.log(`new name is ${newName.toUpperCase()}`);
});

person2.on('ageChanged', newAge => {
  // newAge: number
  if (newAge < 0) {
    console.warn('warning! negative age');
  }
});

/**
 * Intrinsic String Manipulation Types
 */
type HelloWorld = 'Hello, world';

// type HelloWorldUpper = 'HELLO, WORLD'
type HelloWorldUpper = Uppercase<Greeting>;

type ASCIICacheKeyUpper<Str extends string> = `ID-${Uppercase<Str>}`;

// type MainIDUpper = 'ID-MY_APP'
type MainIDUpper = ASCIICacheKeyUpper<'my_app'>;

// type HelloWorldLower = 'hello, world'
type HelloWorldLower = Lowercase<HelloWorld>

type ASCIICacheKeyUpperLower<Str extends string> = `id-${Lowercase<Str>}`

// type MainIDLower = 'id-my_app'
type MainIDLower = ASCIICacheKeyUpperLower<'MY_APP'>

// type HelloWorldCapitalize = 'Hello, world'
type HelloWorldCapitalize = Capitalize<HelloWorldLower>;

// type HelloWorldUncapitalize = 'hELLO WORLD'
type HelloWorldUncapitalize = Uncapitalize<HelloWorldUpper>;
