package xyz.luan.kesef.fixtures;

import xyz.luan.kesef.models.especie.*;

import io.yawp.commons.http.RequestContext;
import io.yawp.repository.Repository;
import io.yawp.repository.Yawp;
import io.yawp.tools.datastore.DeleteAllTool;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class FixturesServlet extends HttpServlet {

    private static final long serialVersionUID = -3756401014065472441L;

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (isProduction()) {
            resp.setStatus(404);
        } else {
            super.service(req, resp);
        }
    }

    // TODO impl this!
    public boolean isProduction() {
        return false;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        runFixtures(mocks(req), req, resp);
        resp.getWriter().print("{\"status\": \"ok\"}");
    }

    private boolean mocks(HttpServletRequest req) {
        String mocks = req.getParameter("mocks");
        return mocks == null || mocks.equalsIgnoreCase("true");
    }

    private void runFixtures(boolean mocks, HttpServletRequest req, HttpServletResponse resp) throws IOException {
        final Repository r = Yawp.yawp();
        r.setRequestContext(new RequestContext(req, resp));

        DeleteAllTool d = new DeleteAllTool();
        d.setRepository(r);
        d.prepareAndExecute();

	setupDatastore(r);
    }

    private void setupDatastore(Repository r) {
        for (Especie e : EspecieFixtures.all()) {
            r.save(e);
        }
    }
}
