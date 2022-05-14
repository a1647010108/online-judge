import $http from "@/http/index";

export const getData = $http.get("http://jsonplaceholder.typicode.com/posts")