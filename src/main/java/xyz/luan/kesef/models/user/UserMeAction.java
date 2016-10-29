package xyz.luan.kesef.models.user; 

import com.google.appengine.api.users.UserServiceFactory;

import io.yawp.commons.http.HttpException;
import io.yawp.commons.http.annotation.GET;
import io.yawp.repository.actions.Action;
import io.yawp.repository.query.NoResultException;

public class UserMeAction extends Action<User> {

	@GET("me")
	public User me() {
		try {
                    return findUserByCurrentUser();
		} catch (NoResultException ex) {
                    throw new HttpException(422, "Sign up required");
                }
	}

	public User findUserByCurrentUser() {
		return yawp(User.class).where("email", "=", getCurrentUserEmail()).only();
	}

	private static String getCurrentUserEmail() {
		com.google.appengine.api.users.User currentUser = UserServiceFactory.getUserService().getCurrentUser();
		if (currentUser == null) {
			throw new NoResultException();
		}
		return currentUser.getEmail();
	}
}
