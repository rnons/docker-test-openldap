# A note about the mock-data branch

This branch contains scripts to add thousands of entries to the LDAP server.

## Clone and start up

```
git clone https://github.com/rnons/docker-test-openldap
cd docker-test-openldap
git checkout mock-data
docker-compose up
```

## Inject mock data

```
cd bootstrap
./add.sh
```

By default, 5000 entries will be injected.

## Remove mock data

```
./delete.sh
```
