// Scaffold only. Run `railway config plan` before any future apply.
export default {
	services: ["go", "uni", "pro", "admin", "docs", "api", "worker"],
	resources: ["postgresql", "redis", "object-storage"],
};
