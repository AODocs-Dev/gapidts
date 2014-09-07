// Type definitions for Google Blogger API v3
// Project: https://developers.google.com/blogger/docs/3.0/getting_started
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * API for access to the data within Blogger.
     */
    module blogger {
        var blogUserInfos: {
            /**
             * Gets one blog and user info pair by blogId and userId.
             * @params {string} blogId The ID of the blog to get.
             * @params {number} maxPosts Maximum number of posts to pull back with the blog.
             * @params {string} userId ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
             */
            get: (params: {
                blogId: string;
                maxPosts?: number;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlogUserInfo
        };
        var blogs: {
            /**
             * Gets one blog by id.
             * @params {string} blogId The ID of the blog to get.
             * @params {number} maxPosts Maximum number of posts to pull back with the blog.
             * @params {string} view Access level with which to view the blogs. Note that some fields require elevated access.
             */
            get: (params: {
                blogId: string;
                maxPosts?: number;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlog
            /**
             * Retrieve a Blog by URL.
             * @params {string} url The URL of the blog to retrieve.
             * @params {string} view Access level with which to view the blogs. Note that some fields require elevated access.
             */
            getByUrl: (params: {
                url: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlog
            /**
             * Retrieves a list of blogs, possibly filtered.
             * @params {boolean} fetchUserInfo Whether the response is a list of blogs with per-user information instead of just blogs.
             * @params {string} role User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified, defaults to ADMIN and AUTHOR roles.
             * @params {string} userId ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
             * @params {string} view Access level with which to view the blogs. Note that some fields require elevated access.
             */
            listByUser: (params: {
                fetchUserInfo?: boolean;
                role?: string;
                userId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlogList
        };
        var comments: {
            /**
             * Marks a comment as not spam.
             * @params {string} blogId The Id of the Blog.
             * @params {string} commentId The ID of the comment to mark as not spam.
             * @params {string} postId The ID of the Post.
             */
            approve: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
            /**
             * Delete a comment by id.
             * @params {string} blogId The Id of the Blog.
             * @params {string} commentId The ID of the comment to delete.
             * @params {string} postId The ID of the Post.
             */
            delete: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Gets one comment by id.
             * @params {string} blogId ID of the blog to containing the comment.
             * @params {string} commentId The ID of the comment to get.
             * @params {string} postId ID of the post to fetch posts from.
             * @params {string} view Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the parent posts which is in a draft state, or comments that are pending moderation.
             */
            get: (params: {
                blogId: string;
                commentId: string;
                postId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
            /**
             * Retrieves the comments for a post, possibly filtered.
             * @params {string} blogId ID of the blog to fetch comments from.
             * @params {string} endDate Latest date of comment to fetch, a date-time with RFC 3339 formatting.
             * @params {boolean} fetchBodies Whether the body content of the comments is included.
             * @params {number} maxResults Maximum number of comments to include in the result.
             * @params {string} pageToken Continuation token if request is paged.
             * @params {string} postId ID of the post to fetch posts from.
             * @params {string} startDate Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
             * @params {string} status 
             * @params {string} view Access level with which to view the returned result. Note that some fields require elevated access.
             */
            list: (params: {
                blogId: string;
                endDate?: string;
                fetchBodies?: boolean;
                maxResults?: number;
                pageToken?: string;
                postId: string;
                startDate?: string;
                status?: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICommentList
            /**
             * Retrieves the comments for a blog, across all posts, possibly filtered.
             * @params {string} blogId ID of the blog to fetch comments from.
             * @params {string} endDate Latest date of comment to fetch, a date-time with RFC 3339 formatting.
             * @params {boolean} fetchBodies Whether the body content of the comments is included.
             * @params {number} maxResults Maximum number of comments to include in the result.
             * @params {string} pageToken Continuation token if request is paged.
             * @params {string} startDate Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
             */
            listByBlog: (params: {
                blogId: string;
                endDate?: string;
                fetchBodies?: boolean;
                maxResults?: number;
                pageToken?: string;
                startDate?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICommentList
            /**
             * Marks a comment as spam.
             * @params {string} blogId The Id of the Blog.
             * @params {string} commentId The ID of the comment to mark as spam.
             * @params {string} postId The ID of the Post.
             */
            markAsSpam: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
            /**
             * Removes the content of a comment.
             * @params {string} blogId The Id of the Blog.
             * @params {string} commentId The ID of the comment to delete content from.
             * @params {string} postId The ID of the Post.
             */
            removeContent: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
        };
        var pageViews: {
            /**
             * Retrieve pageview stats for a Blog.
             * @params {string} blogId The ID of the blog to get.
             * @params {string} range 
             */
            get: (params: {
                blogId: string;
                range?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPageviews
        };
        var pages: {
            /**
             * Delete a page by id.
             * @params {string} blogId The Id of the Blog.
             * @params {string} pageId The ID of the Page.
             */
            delete: (params: {
                blogId: string;
                pageId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Gets one blog page by id.
             * @params {string} blogId ID of the blog containing the page.
             * @params {string} pageId The ID of the page to get.
             * @params {string} view 
             */
            get: (params: {
                blogId: string;
                pageId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPage
            /**
             * Add a page.
             * @params {string} blogId ID of the blog to add the page to.
             */
            insert: (params: {
                blogId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPage
            /**
             * Retrieves the pages for a blog, optionally including non-LIVE statuses.
             * @params {string} blogId ID of the blog to fetch pages from.
             * @params {boolean} fetchBodies Whether to retrieve the Page bodies.
             * @params {string} status 
             * @params {string} view Access level with which to view the returned result. Note that some fields require elevated access.
             */
            list: (params: {
                blogId: string;
                fetchBodies?: boolean;
                status?: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPageList
            /**
             * Update a page. This method supports patch semantics.
             * @params {string} blogId The ID of the Blog.
             * @params {string} pageId The ID of the Page.
             */
            patch: (params: {
                blogId: string;
                pageId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPage
            /**
             * Update a page.
             * @params {string} blogId The ID of the Blog.
             * @params {string} pageId The ID of the Page.
             */
            update: (params: {
                blogId: string;
                pageId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPage
        };
        var postUserInfos: {
            /**
             * Gets one post and user info pair, by post id and user id. The post user info contains per-user information about the post, such as access rights, specific to the user.
             * @params {string} blogId The ID of the blog.
             * @params {number} maxComments Maximum number of comments to pull back on a post.
             * @params {string} postId The ID of the post to get.
             * @params {string} userId ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
             */
            get: (params: {
                blogId: string;
                maxComments?: number;
                postId: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPostUserInfo
            /**
             * Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user.
             * @params {string} blogId ID of the blog to fetch posts from.
             * @params {string} endDate Latest post date to fetch, a date-time with RFC 3339 formatting.
             * @params {boolean} fetchBodies Whether the body content of posts is included. Default is false.
             * @params {string} labels Comma-separated list of labels to search for.
             * @params {number} maxResults Maximum number of posts to fetch.
             * @params {string} orderBy Sort order applied to search results. Default is published.
             * @params {string} pageToken Continuation token if the request is paged.
             * @params {string} startDate Earliest post date to fetch, a date-time with RFC 3339 formatting.
             * @params {string} status 
             * @params {string} userId ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
             * @params {string} view Access level with which to view the returned result. Note that some fields require elevated access.
             */
            list: (params: {
                blogId: string;
                endDate?: string;
                fetchBodies?: boolean;
                labels?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                startDate?: string;
                status?: string;
                userId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPostUserInfosList
        };
        var posts: {
            /**
             * Delete a post by id.
             * @params {string} blogId The Id of the Blog.
             * @params {string} postId The ID of the Post.
             */
            delete: (params: {
                blogId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Get a post by id.
             * @params {string} blogId ID of the blog to fetch the post from.
             * @params {boolean} fetchBody Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
             * @params {boolean} fetchImages Whether image URL metadata for each post is included (default: false).
             * @params {number} maxComments Maximum number of comments to pull back on a post.
             * @params {string} postId The ID of the post
             * @params {string} view Access level with which to view the returned result. Note that some fields require elevated access.
             */
            get: (params: {
                blogId: string;
                fetchBody?: boolean;
                fetchImages?: boolean;
                maxComments?: number;
                postId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            /**
             * Retrieve a Post by Path.
             * @params {string} blogId ID of the blog to fetch the post from.
             * @params {number} maxComments Maximum number of comments to pull back on a post.
             * @params {string} path Path of the Post to retrieve.
             * @params {string} view Access level with which to view the returned result. Note that some fields require elevated access.
             */
            getByPath: (params: {
                blogId: string;
                maxComments?: number;
                path: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            /**
             * Add a post.
             * @params {string} blogId ID of the blog to add the post to.
             * @params {boolean} fetchBody Whether the body content of the post is included with the result (default: true).
             * @params {boolean} fetchImages Whether image URL metadata for each post is included in the returned result (default: false).
             * @params {boolean} isDraft Whether to create the post as a draft (default: false).
             */
            insert: (params: {
                blogId: string;
                fetchBody?: boolean;
                fetchImages?: boolean;
                isDraft?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            /**
             * Retrieves a list of posts, possibly filtered.
             * @params {string} blogId ID of the blog to fetch posts from.
             * @params {string} endDate Latest post date to fetch, a date-time with RFC 3339 formatting.
             * @params {boolean} fetchBodies Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
             * @params {boolean} fetchImages Whether image URL metadata for each post is included.
             * @params {string} labels Comma-separated list of labels to search for.
             * @params {number} maxResults Maximum number of posts to fetch.
             * @params {string} orderBy Sort search results
             * @params {string} pageToken Continuation token if the request is paged.
             * @params {string} startDate Earliest post date to fetch, a date-time with RFC 3339 formatting.
             * @params {string} status Statuses to include in the results.
             * @params {string} view Access level with which to view the returned result. Note that some fields require escalated access.
             */
            list: (params: {
                blogId: string;
                endDate?: string;
                fetchBodies?: boolean;
                fetchImages?: boolean;
                labels?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                startDate?: string;
                status?: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPostList
            /**
             * Update a post. This method supports patch semantics.
             * @params {string} blogId The ID of the Blog.
             * @params {boolean} fetchBody Whether the body content of the post is included with the result (default: true).
             * @params {boolean} fetchImages Whether image URL metadata for each post is included in the returned result (default: false).
             * @params {number} maxComments Maximum number of comments to retrieve with the returned post.
             * @params {string} postId The ID of the Post.
             * @params {boolean} publish Whether a publish action should be performed when the post is updated (default: false).
             * @params {boolean} revert Whether a revert action should be performed when the post is updated (default: false).
             */
            patch: (params: {
                blogId: string;
                fetchBody?: boolean;
                fetchImages?: boolean;
                maxComments?: number;
                postId: string;
                publish?: boolean;
                revert?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            /**
             * Publish a draft post.
             * @params {string} blogId The ID of the Blog.
             * @params {string} postId The ID of the Post.
             * @params {string} publishDate The date and time to schedule the publishing of the Blog.
             */
            publish: (params: {
                blogId: string;
                postId: string;
                publishDate?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            /**
             * Revert a published or scheduled post to draft state.
             * @params {string} blogId The ID of the Blog.
             * @params {string} postId The ID of the Post.
             */
            revert: (params: {
                blogId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            /**
             * Search for a post.
             * @params {string} blogId ID of the blog to fetch the post from.
             * @params {boolean} fetchBodies Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
             * @params {string} orderBy Sort search results
             * @params {string} q Query terms to search this blog for matching posts.
             */
            search: (params: {
                blogId: string;
                fetchBodies?: boolean;
                orderBy?: string;
                q: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPostList
            /**
             * Update a post.
             * @params {string} blogId The ID of the Blog.
             * @params {boolean} fetchBody Whether the body content of the post is included with the result (default: true).
             * @params {boolean} fetchImages Whether image URL metadata for each post is included in the returned result (default: false).
             * @params {number} maxComments Maximum number of comments to retrieve with the returned post.
             * @params {string} postId The ID of the Post.
             * @params {boolean} publish Whether a publish action should be performed when the post is updated (default: false).
             * @params {boolean} revert Whether a revert action should be performed when the post is updated (default: false).
             */
            update: (params: {
                blogId: string;
                fetchBody?: boolean;
                fetchImages?: boolean;
                maxComments?: number;
                postId: string;
                publish?: boolean;
                revert?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
        };
        var users: {
            /**
             * Gets one user by id.
             * @params {string} userId The ID of the user to get.
             */
            get: (params: {
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IUser
        };
        interface IBlog {
            /**
             * The JSON custom meta-data for the Blog
             */
            customMetaData: string;
            /**
             * The description of this blog. This is displayed underneath the title.
             */
            description: string;
            /**
             * The identifier for this resource.
             */
            id: string;
            /**
             * The kind of this entry. Always blogger#blog
             */
            kind: string;
            /**
             * The locale this Blog is set to.
             */
            locale: {
                country: string;
                language: string;
                variant: string;
            };
            /**
             * The name of this blog. This is displayed as the title.
             */
            name: string;
            /**
             * The container of pages in this blog.
             */
            pages: {
                selfLink: string;
                totalItems: number; // int32
            };
            /**
             * The container of posts in this blog.
             */
            posts: {
                items: IPost[];
                selfLink: string;
                totalItems: number; // int32
            };
            /**
             * RFC 3339 date-time when this blog was published.
             */
            published: string; // date-time
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * RFC 3339 date-time when this blog was last updated.
             */
            updated: string; // date-time
            /**
             * The URL where this blog is published.
             */
            url: string;
        }
        interface IBlogList {
            /**
             * Admin level list of blog per-user information
             */
            blogUserInfos: IBlogUserInfo[];
            /**
             * The list of Blogs this user has Authorship or Admin rights over.
             */
            items: IBlog[];
            /**
             * The kind of this entity. Always blogger#blogList
             */
            kind: string;
        }
        interface IBlogPerUserInfo {
            /**
             * ID of the Blog resource
             */
            blogId: string;
            /**
             * True if the user has Admin level access to the blog.
             */
            hasAdminAccess: boolean;
            /**
             * The kind of this entity. Always blogger#blogPerUserInfo
             */
            kind: string;
            /**
             * The Photo Album Key for the user when adding photos to the blog
             */
            photosAlbumKey: string;
            /**
             * Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
             */
            role: string;
            /**
             * ID of the User
             */
            userId: string;
        }
        interface IBlogUserInfo {
            /**
             * The Blog resource.
             */
            blog: IBlog;
            /**
             * Information about a User for the Blog.
             */
            blog_user_info: IBlogPerUserInfo;
            /**
             * The kind of this entity. Always blogger#blogUserInfo
             */
            kind: string;
        }
        interface IComment {
            /**
             * The author of this Comment.
             */
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            /**
             * Data about the blog containing this comment.
             */
            blog: {
                id: string;
            };
            /**
             * The actual content of the comment. May include HTML markup.
             */
            content: string;
            /**
             * The identifier for this resource.
             */
            id: string;
            /**
             * Data about the comment this is in reply to.
             */
            inReplyTo: {
                id: string;
            };
            /**
             * The kind of this entry. Always blogger#comment
             */
            kind: string;
            /**
             * Data about the post containing this comment.
             */
            post: {
                id: string;
            };
            /**
             * RFC 3339 date-time when this comment was published.
             */
            published: string; // date-time
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * The status of the comment (only populated for admin users)
             */
            status: string;
            /**
             * RFC 3339 date-time when this comment was last updated.
             */
            updated: string; // date-time
        }
        interface ICommentList {
            /**
             * The List of Comments for a Post.
             */
            items: IComment[];
            /**
             * The kind of this entry. Always blogger#commentList
             */
            kind: string;
            /**
             * Pagination token to fetch the next page, if one exists.
             */
            nextPageToken: string;
            /**
             * Pagination token to fetch the previous page, if one exists.
             */
            prevPageToken: string;
        }
        interface IPage {
            /**
             * The author of this Page.
             */
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            /**
             * Data about the blog containing this Page.
             */
            blog: {
                id: string;
            };
            /**
             * The body content of this Page, in HTML.
             */
            content: string;
            /**
             * The identifier for this resource.
             */
            id: string;
            /**
             * The kind of this entity. Always blogger#page
             */
            kind: string;
            /**
             * RFC 3339 date-time when this Page was published.
             */
            published: string; // date-time
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * The status of the page for admin resources (either LIVE or DRAFT).
             */
            status: string;
            /**
             * The title of this entity. This is the name displayed in the Admin user interface.
             */
            title: string;
            /**
             * RFC 3339 date-time when this Page was last updated.
             */
            updated: string; // date-time
            /**
             * The URL that this Page is displayed at.
             */
            url: string;
        }
        interface IPageList {
            /**
             * The list of Pages for a Blog.
             */
            items: IPage[];
            /**
             * The kind of this entity. Always blogger#pageList
             */
            kind: string;
        }
        interface IPageviews {
            /**
             * Blog Id
             */
            blogId: string; // int64
            /**
             * The container of posts in this blog.
             */
            counts: {
                count: string; // int64
                timeRange: string;
            }[];
            /**
             * The kind of this entry. Always blogger#page_views
             */
            kind: string;
        }
        interface IPost {
            /**
             * The author of this Post.
             */
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            /**
             * Data about the blog containing this Post.
             */
            blog: {
                id: string;
            };
            /**
             * The content of the Post. May contain HTML markup.
             */
            content: string;
            /**
             * The JSON meta-data for the Post.
             */
            customMetaData: string;
            /**
             * The identifier of this Post.
             */
            id: string;
            /**
             * Display image for the Post.
             */
            images: {
                url: string;
            }[];
            /**
             * The kind of this entity. Always blogger#post
             */
            kind: string;
            /**
             * The list of labels this Post was tagged with.
             */
            labels: string[];
            /**
             * The location for geotagged posts.
             */
            location: {
                lat: number; // double
                lng: number; // double
                name: string;
                span: string;
            };
            /**
             * RFC 3339 date-time when this Post was published.
             */
            published: string; // date-time
            /**
             * The container of comments on this Post.
             */
            replies: {
                items: IComment[];
                selfLink: string;
                totalItems: string; // int64
            };
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * Status of the post. Only set for admin-level requests
             */
            status: string;
            /**
             * The title of the Post.
             */
            title: string;
            /**
             * The title link URL, similar to atom's related link.
             */
            titleLink: string;
            /**
             * RFC 3339 date-time when this Post was last updated.
             */
            updated: string; // date-time
            /**
             * The URL where this Post is displayed.
             */
            url: string;
        }
        interface IPostList {
            /**
             * The list of Posts for this Blog.
             */
            items: IPost[];
            /**
             * The kind of this entity. Always blogger#postList
             */
            kind: string;
            /**
             * Pagination token to fetch the next page, if one exists.
             */
            nextPageToken: string;
        }
        interface IPostPerUserInfo {
            /**
             * ID of the Blog that the post resource belongs to.
             */
            blogId: string;
            /**
             * True if the user has Author level access to the post.
             */
            hasEditAccess: boolean;
            /**
             * The kind of this entity. Always blogger#postPerUserInfo
             */
            kind: string;
            /**
             * ID of the Post resource.
             */
            postId: string;
            /**
             * ID of the User.
             */
            userId: string;
        }
        interface IPostUserInfo {
            /**
             * The kind of this entity. Always blogger#postUserInfo
             */
            kind: string;
            /**
             * The Post resource.
             */
            post: IPost;
            /**
             * Information about a User for the Post.
             */
            post_user_info: IPostPerUserInfo;
        }
        interface IPostUserInfosList {
            /**
             * The list of Posts with User information for the post, for this Blog.
             */
            items: IPostUserInfo[];
            /**
             * The kind of this entity. Always blogger#postList
             */
            kind: string;
            /**
             * Pagination token to fetch the next page, if one exists.
             */
            nextPageToken: string;
        }
        interface IUser {
            /**
             * Profile summary information.
             */
            about: string;
            /**
             * The container of blogs for this user.
             */
            blogs: {
                selfLink: string;
            };
            /**
             * The timestamp of when this profile was created, in seconds since epoch.
             */
            created: string; // date-time
            /**
             * The display name.
             */
            displayName: string;
            /**
             * The identifier for this User.
             */
            id: string;
            /**
             * The kind of this entity. Always blogger#user
             */
            kind: string;
            /**
             * This user's locale
             */
            locale: {
                country: string;
                language: string;
                variant: string;
            };
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * The user's profile page.
             */
            url: string;
        }
    }
}
