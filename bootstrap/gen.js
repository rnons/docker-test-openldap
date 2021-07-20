#!/usr/bin/env node

const fs = require("fs/promises");

let genMock = n =>
  `dn: cn=Philip J. Fry${n},ou=people,dc=planetexpress,dc=com
objectClass: inetOrgPerson
objectClass: organizationalPerson
objectClass: person
objectClass: top
cn: Philip J. Fry${n}
sn: Fry${n}
description: Human
displayName: Fry${n}
employeeType: Delivery boy
givenName: Philip
mail: fry${n}@planetexpress.com
ou: Delivering Crew
uid: fry${n}
userPassword:: e3NzaGF9d0wvVG0wSHNaeU90K29jbXlrU290UkpURnczd0ZKOWRlaEU4eFE9P
 Q==
`;

async function main() {
  let length = process.argv[2] || 100;

  await Promise.all(
    Array.from({ length }).map((_, index) =>
      fs.writeFile(`mock-data/mock_fry${index}.ldif`, genMock(index))
    )
  );
}

main();
