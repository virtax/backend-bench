package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	// Set Gin to "release" mode
	gin.SetMode(gin.ReleaseMode)

	// Initialize the router without default middleware (no logger)
	router := gin.New()

	// Add only the recovery middleware (to recover from panics)
	router.Use(gin.Recovery())

	// Define the endpoint
	router.GET("/", func(c *gin.Context) {
		c.String(200, "Hello, World!")
	})

	// Start the server on port 3200
	router.Run(":3000")
}
