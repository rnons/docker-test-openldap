#!/usr/bin/env bash

for i in {0..5000}
do
    echo deleting $i
    ldapdelete -x -H ldap://127.0.0.1:10389 \
               -D cn=admin,dc=planetexpress,dc=com -w GoodNewsEveryone \
               "cn=Philip J. Fry$i,ou=people,dc=planetexpress,dc=com"
done

rm data/mock_fry*
