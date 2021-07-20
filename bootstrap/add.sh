#!/usr/bin/env bash

./gen.js 5001

for i in {0..5000}
do
    ldapadd -x -H ldap://127.0.0.1:10389 \
            -D cn=admin,dc=planetexpress,dc=com -w GoodNewsEveryone \
            -f data/mock_fry$i.ldif
done
