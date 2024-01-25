CREATE TABLE `transactions` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`user_id` text(36) NOT NULL,
	`category_id` text(36) NOT NULL,
	`amount` text(100) NOT NULL,
	`description` text(255) NOT NULL,
	`date` text(100) NOT NULL,
	`type` text(100) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
