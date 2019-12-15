package code.repository;


import code.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findBy_id(ObjectId _id);
    Boolean existsByNameAndPassword(String name, String password);
    User findByNameAndPassword(String name, String password);
    User findByToken(String token);
}