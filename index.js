const express = require('express');
const router = express.Router();
const pageModel = require("./pages");


router.post("/create", async function(req, res) {
    try {
        const { pagename, username, description, content } = req.body;
        const newPage = await pageModel.create({
            pagename,
            username,
            description,
            content,
        });
        res.json(newPage);
    } catch (error) {
        console.error(error);
        res.json({ error: "Internal Server Error" });
    }
});

router.get("/allpages", async function(req, res) {
    try {
        const allPages = await pageModel.find({});
        res.json(allPages);
    } catch (error) {
        console.error(error);
        res.json({ error: "Internal Server Error" });
    }
});

router.get("/:id", async function(req, res) {
    try {
        const pageId = req.params.id;
        const page = await pageModel.findById(pageId);
        if (!page) {
            res.json({ error: "Page not found" });
            return;
        }
        res.json(page);
    } catch (error) {
        console.error(error);
        res.json({ error: "Internal Server Error" });
    }
});

router.put("/:id", async function(req, res) {
    try {
        const pageId = req.params.id;
        const { pagename, username, description, content } = req.body;
        const updatedPage = await pageModel.findByIdAndUpdate(
            pageId,
            {
                pagename,
                username,
                description,
                content,
            },
            { new: true }
        );
        if (!updatedPage) {
            res.json({ error: "Page not found" });
            return;
        }
        res.json(updatedPage);
    } catch (error) {
        console.error(error);
        res.json({ error: "Internal Server Error" });
    }
});

router.delete("/:id", async function(req, res) {
    try {
        const pageId = req.params.id;
        const deletedPage = await pageModel.findByIdAndDelete(pageId);
        if (!deletedPage) {
            res.json({ error: "Page not found" });
            return;
        }
        res.json(deletedPage);
    } catch (error) {
        console.error(error);
        res.json({ error: "Internal Server Error" });
    }
});

module.exports = router;
