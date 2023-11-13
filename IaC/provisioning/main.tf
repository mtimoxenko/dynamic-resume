
resource "aws_instance" "web" {
  ami           = "ami-0f34c5ae932e6f0e4"
  instance_type = "t2.micro"

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y nginx
              echo "<h1>Hello from Terraform</h1>" > /usr/share/nginx/html/index.html
              systemctl start nginx
              systemctl enable nginx
              EOF

  tags = {
    Name = "ec2-nginx-fr3m3n"
  }
}

output "ec2_public_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_instance.web.public_ip
}