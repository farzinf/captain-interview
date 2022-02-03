echo "Creating $MONGO_USERNAME user on $MONGO_DATABASE database"

mongo ${MONGO_DATABASE} \
        -u ${MONGO_ROOT_USERNAME} \
        -p ${MONGO_ROOT_PASSWORD} \
        --authenticationDatabase admin \
        --eval "db.createUser({user: '$MONGO_USERNAME', pwd: '$MONGO_PASSWORD', roles:['readWrite']});"
