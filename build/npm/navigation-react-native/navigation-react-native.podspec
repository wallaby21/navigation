Pod::Spec.new do |spec|
  spec.name         = "navigation-react-native"
  spec.version      = "6.10.2"
  spec.license      = "Apache-2.0"
  spec.summary      = "React Native plugin for the Navigation router"
  spec.homepage     = "http://grahammendick.github.io/navigation/"
  spec.platform     = :ios, "9.0"
  spec.author       = "Graham Mendick"
  spec.source       = { :git => "git://github.com/grahammendick/navigation.git", :tag => "v6.10.2-NavigationReactNative" }
  spec.source_files = "ios/**/*.{h,m}"
  spec.dependency "React"
end
